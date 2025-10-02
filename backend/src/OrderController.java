package src;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import java.sql.*;
import java.util.*;

public class OrderController {
    private static final Gson gson = new Gson();

    // Place order (checkout)
    public static String placeOrder(Request req, Response res) {
        Map<String, String> data = gson.fromJson(req.body(), Map.class);
        String mobile = data.get("mobile");
        try (Connection conn = Database.getConnection()) {
            conn.setAutoCommit(false);
            PreparedStatement userStmt = conn.prepareStatement("SELECT id FROM users WHERE mobile=?");
            userStmt.setString(1, mobile);
            ResultSet userRs = userStmt.executeQuery();
            if (!userRs.next()) {
                res.status(400);
                return gson.toJson(Map.of("success", false, "error", "User not found"));
            }
            int userId = userRs.getInt("id");
            PreparedStatement cartStmt = conn.prepareStatement("SELECT * FROM cart WHERE user_id=?");
            cartStmt.setInt(1, userId);
            ResultSet cartRs = cartStmt.executeQuery();
            List<Map<String, Object>> items = new ArrayList<>();
            double total = 0;
            while (cartRs.next()) {
                Map<String, Object> item = new HashMap<>();
                item.put("product_id", cartRs.getInt("product_id"));
                item.put("size", cartRs.getString("size"));
                item.put("quantity", cartRs.getInt("quantity"));
                items.add(item);
            }
            if (items.isEmpty()) {
                res.status(400);
                return gson.toJson(Map.of("success", false, "error", "Cart is empty"));
            }
            PreparedStatement orderStmt = conn.prepareStatement("INSERT INTO orders (user_id, created_at) VALUES (?, CURRENT_TIMESTAMP)", Statement.RETURN_GENERATED_KEYS);
            orderStmt.setInt(1, userId);
            orderStmt.executeUpdate();
            ResultSet orderKeys = orderStmt.getGeneratedKeys();
            orderKeys.next();
            int orderId = orderKeys.getInt(1);
            PreparedStatement itemStmt = conn.prepareStatement("INSERT INTO order_items (order_id, product_id, size, quantity) VALUES (?, ?, ?, ?)");
            for (Map<String, Object> item : items) {
                itemStmt.setInt(1, orderId);
                itemStmt.setInt(2, (int)item.get("product_id"));
                itemStmt.setString(3, (String)item.get("size"));
                itemStmt.setInt(4, (int)item.get("quantity"));
                itemStmt.addBatch();
            }
            itemStmt.executeBatch();
            PreparedStatement clearCart = conn.prepareStatement("DELETE FROM cart WHERE user_id=?");
            clearCart.setInt(1, userId);
            clearCart.executeUpdate();
            conn.commit();
            return gson.toJson(Map.of("success", true, "orderId", orderId));
        } catch (Exception e) {
            res.status(500);
            return gson.toJson(Map.of("success", false, "error", e.getMessage()));
        }
    }
}

package src;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import java.sql.*;
import java.util.*;

public class OrderHistoryController {
    private static final Gson gson = new Gson();

    // Get order history for a user
    public static String getOrderHistory(Request req, Response res) {
        String mobile = req.queryParams("mobile");
        List<Map<String, Object>> orders = new ArrayList<>();
        try (Connection conn = Database.getConnection()) {
            PreparedStatement userStmt = conn.prepareStatement("SELECT id FROM users WHERE mobile=?");
            userStmt.setString(1, mobile);
            ResultSet userRs = userStmt.executeQuery();
            if (!userRs.next()) {
                res.status(400);
                return gson.toJson(orders);
            }
            int userId = userRs.getInt("id");
            PreparedStatement orderStmt = conn.prepareStatement("SELECT id, created_at FROM orders WHERE user_id=? ORDER BY created_at DESC");
            orderStmt.setInt(1, userId);
            ResultSet orderRs = orderStmt.executeQuery();
            while (orderRs.next()) {
                int orderId = orderRs.getInt("id");
                Map<String, Object> order = new HashMap<>();
                order.put("orderId", orderId);
                order.put("createdAt", orderRs.getTimestamp("created_at"));
                List<Map<String, Object>> items = new ArrayList<>();
                PreparedStatement itemStmt = conn.prepareStatement("SELECT oi.size, oi.quantity, p.name, p.price, p.image_url FROM order_items oi JOIN products p ON oi.product_id=p.id WHERE oi.order_id=?");
                itemStmt.setInt(1, orderId);
                ResultSet itemRs = itemStmt.executeQuery();
                while (itemRs.next()) {
                    Map<String, Object> item = new HashMap<>();
                    item.put("name", itemRs.getString("name"));
                    item.put("size", itemRs.getString("size"));
                    item.put("quantity", itemRs.getInt("quantity"));
                    item.put("price", itemRs.getDouble("price"));
                    item.put("img", itemRs.getString("image_url"));
                    items.add(item);
                }
                order.put("items", items);
                orders.add(order);
            }
            return gson.toJson(orders);
        } catch (Exception e) {
            res.status(500);
            return gson.toJson(orders);
        }
    }
}

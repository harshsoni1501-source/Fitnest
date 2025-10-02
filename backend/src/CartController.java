package src;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import java.sql.*;
import java.util.*;

public class CartController {
    private static final Gson gson = new Gson();

    // Add item to cart
    public static String addToCart(Request req, Response res) {
        Map<String, String> data = gson.fromJson(req.body(), Map.class);
        String mobile = data.get("mobile");
        int productId = Integer.parseInt(data.get("productId"));
        String size = data.get("size");
        int quantity = Integer.parseInt(data.getOrDefault("quantity", "1"));
        try (Connection conn = Database.getConnection()) {
            PreparedStatement ps = conn.prepareStatement(
                "INSERT INTO cart (user_id, product_id, size, quantity) VALUES ((SELECT id FROM users WHERE mobile=?), ?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?");
            ps.setString(1, mobile);
            ps.setInt(2, productId);
            ps.setString(3, size);
            ps.setInt(4, quantity);
            ps.setInt(5, quantity);
            ps.executeUpdate();
            return gson.toJson(Map.of("success", true));
        } catch (Exception e) {
            res.status(500);
            return gson.toJson(Map.of("success", false, "error", e.getMessage()));
        }
    }

    // Get cart items for user
    public static String getCart(Request req, Response res) {
        String mobile = req.queryParams("mobile");
        List<Map<String, Object>> items = new ArrayList<>();
        try (Connection conn = Database.getConnection()) {
            PreparedStatement ps = conn.prepareStatement(
                "SELECT c.id, c.size, c.quantity, p.name, p.price, p.image_url FROM cart c JOIN users u ON c.user_id=u.id JOIN products p ON c.product_id=p.id WHERE u.mobile=?");
            ps.setString(1, mobile);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Map<String, Object> item = new HashMap<>();
                item.put("id", rs.getInt("id"));
                item.put("name", rs.getString("name"));
                item.put("size", rs.getString("size"));
                item.put("quantity", rs.getInt("quantity"));
                item.put("price", rs.getDouble("price"));
                item.put("img", rs.getString("image_url"));
                items.add(item);
            }
            return gson.toJson(items);
        } catch (Exception e) {
            res.status(500);
            return gson.toJson(Map.of("success", false, "error", e.getMessage()));
        }
    }

    // Remove item from cart
    public static String removeFromCart(Request req, Response res) {
        Map<String, String> data = gson.fromJson(req.body(), Map.class);
        int cartId = Integer.parseInt(data.get("cartId"));
        try (Connection conn = Database.getConnection()) {
            PreparedStatement ps = conn.prepareStatement("DELETE FROM cart WHERE id=?");
            ps.setInt(1, cartId);
            ps.executeUpdate();
            return gson.toJson(Map.of("success", true));
        } catch (Exception e) {
            res.status(500);
            return gson.toJson(Map.of("success", false, "error", e.getMessage()));
        }
    }
}

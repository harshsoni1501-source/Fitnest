package src;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import java.sql.*;
import java.util.*;

public class ProductController {
    private static final Gson gson = new Gson();

    // Add new product (for sellers)
    public static String addProduct(Request req, Response res) {
        Map<String, String> data = gson.fromJson(req.body(), Map.class);
        String name = data.get("name");
        String description = data.get("description");
        double price = Double.parseDouble(data.get("price"));
        String category = data.get("category");
        String imageUrl = data.get("imageUrl");
        String seller = data.get("seller"); // Optional, can be mobile or name
        try (Connection conn = Database.getConnection()) {
            PreparedStatement ps = conn.prepareStatement(
                "INSERT INTO products (name, description, price, category, image_url, seller) VALUES (?, ?, ?, ?, ?, ?)");
            ps.setString(1, name);
            ps.setString(2, description);
            ps.setDouble(3, price);
            ps.setString(4, category);
            ps.setString(5, imageUrl);
            ps.setString(6, seller);
            ps.executeUpdate();
            return gson.toJson(Map.of("success", true, "message", "Product added successfully"));
        } catch (Exception e) {
            res.status(500);
            return gson.toJson(Map.of("success", false, "error", e.getMessage()));
        }
    }

    // Get all products (for frontend display)
    public static String getProducts(Request req, Response res) {
        List<Map<String, Object>> products = new ArrayList<>();
        try (Connection conn = Database.getConnection()) {
            PreparedStatement ps = conn.prepareStatement("SELECT * FROM products");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Map<String, Object> product = new HashMap<>();
                product.put("id", rs.getInt("id"));
                product.put("name", rs.getString("name"));
                product.put("description", rs.getString("description"));
                product.put("price", rs.getDouble("price"));
                product.put("category", rs.getString("category"));
                product.put("imageUrl", rs.getString("image_url"));
                product.put("seller", rs.getString("seller"));
                products.add(product);
            }
            return gson.toJson(products);
        } catch (Exception e) {
            res.status(500);
            return gson.toJson(Map.of("success", false, "error", e.getMessage()));
        }
    }
}

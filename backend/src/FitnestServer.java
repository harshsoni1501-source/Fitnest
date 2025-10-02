package src;

import static spark.Spark.*;
import com.google.gson.Gson;
import java.sql.*;
import java.util.*;

public class FitnestServer {
    // Order history for user
    get("/api/orders/history", OrderHistoryController::getOrderHistory);
    // Order placement (checkout)
    post("/api/order/checkout", OrderController::placeOrder);
    public static void main(String[] args) {
        port(4567);
        Gson gson = new Gson();

        // Enable CORS for frontend
        before((req, res) -> {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
            res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
        });
        options("/*", (req, res) -> "OK");

        // Health check
        get("/api/health", (req, res) -> "OK");

        // User signup/login with OTP (simulated)
        post("/api/send-otp", (req, res) -> {
            Map<String, String> data = gson.fromJson(req.body(), Map.class);
            String mobile = data.get("mobile");
            // Simulate OTP send, store in DB for real app
            return gson.toJson(Map.of("success", true, "otp", "123456"));
        });
        post("/api/verify-otp", (req, res) -> {
            Map<String, String> data = gson.fromJson(req.body(), Map.class);
            String mobile = data.get("mobile");
            String otp = data.get("otp");
            // Simulate OTP check
            if ("123456".equals(otp)) {
                // In real app, create/find user in DB
                return gson.toJson(Map.of("success", true, "mobile", mobile));
            } else {
                return gson.toJson(Map.of("success", false));
            }
        });

        // Cart management endpoints
        post("/api/cart/add", CartController::addToCart);
        get("/api/cart", CartController::getCart);
        post("/api/cart/remove", CartController::removeFromCart);

        // Product listing (static for now)
        get("/api/products", (req, res) -> {
            String category = req.queryParams("category");
            List<Map<String, Object>> products = new ArrayList<>();
            if ("men".equals(category)) {
                products.add(Map.of("id", 1, "name", "Classic White Shirt", "price", 999, "img", "assets/men1.jpg", "sizes", List.of("S","M","L","XL")));
                products.add(Map.of("id", 2, "name", "Sporty T-shirt", "price", 699, "img", "assets/men2.jpg", "sizes", List.of("S","M","L","XL")));
                products.add(Map.of("id", 5, "name", "Denim Jeans", "price", 1199, "img", "assets/men3.jpg", "sizes", List.of("S","M","L","XL")));
                products.add(Map.of("id", 6, "name", "Leather Belt", "price", 499, "img", "assets/men4.jpg", "sizes", List.of("S","M","L","XL")));
            } else if ("women".equals(category)) {
                products.add(Map.of("id", 3, "name", "Elegant Summer Dress", "price", 1299, "img", "assets/women1.jpg", "sizes", List.of("S","M","L","XL")));
                products.add(Map.of("id", 4, "name", "Chic Top", "price", 799, "img", "assets/women2.jpg", "sizes", List.of("S","M","L","XL")));
                products.add(Map.of("id", 7, "name", "Designer Handbag", "price", 1599, "img", "assets/women3.jpg", "sizes", List.of("One Size")));
                products.add(Map.of("id", 8, "name", "Pearl Earrings", "price", 599, "img", "assets/women4.jpg", "sizes", List.of("One Size")));
            }
            res.type("application/json");
            return gson.toJson(products);
        });

        // Cart endpoints would go here (future)
    }
}

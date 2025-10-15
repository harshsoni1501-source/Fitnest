package src;

import static spark.Spark.*;
import com.google.gson.Gson;
import java.sql.*;
import java.util.*;
import java.nio.file.Paths;

public class FitnestServer {
    // Order history for user
    get("/api/orders/history", OrderHistoryController::getOrderHistory);
    // Order placement (checkout)
    post("/api/order/checkout", OrderController::placeOrder);
    public static void main(String[] args) {
        port(4567);
        Gson gson = new Gson();

        // Serve static files from frontend directory
        staticFiles.externalLocation(Paths.get(System.getProperty("user.dir"), "..", "frontend").toAbsolutePath().toString());

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

        // Product listing (from DB)
        get("/api/products", ProductController::getProducts);

        // Add new product (for sellers)
        post("/api/products", ProductController::addProduct);

        // Authentication endpoint
        post("/api/auth/login", AuthController::login);

        // Cart endpoints would go here (future)
    }
}

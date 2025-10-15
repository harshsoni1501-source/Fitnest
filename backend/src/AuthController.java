package src;

import com.google.gson.Gson;
import spark.Request;
import spark.Response;
import java.util.*;

public class AuthController {
    private static final Gson gson = new Gson();

    // Demo in-memory users for buyers and sellers
    private static final Map<String, String> BUYER_USERS = Map.of("buyer1", "pass1");
    private static final Map<String, String> SELLER_USERS = Map.of("seller1", "pass1");

    // POST /api/auth/login - accepts { username, password, role }
    public static String login(Request req, Response res) {
        res.type("application/json");
        try {
            Map<String, String> data = gson.fromJson(req.body(), Map.class);
            String username = data.get("username");
            String password = data.get("password");
            String role = data.get("role");

            if (username == null || password == null || role == null) {
                res.status(400);
                return gson.toJson(Map.of("success", false, "message", "Missing username, password, or role"));
            }

            Map<String, String> userStore;
            if ("buyer".equals(role)) {
                userStore = BUYER_USERS;
            } else if ("seller".equals(role)) {
                userStore = SELLER_USERS;
            } else {
                res.status(400);
                return gson.toJson(Map.of("success", false, "message", "Invalid role"));
            }

            if (userStore.containsKey(username) && userStore.get(username).equals(password)) {
                res.status(200);
                return gson.toJson(Map.of("success", true, "username", username, "role", role, "message", "Login successful"));
            } else {
                res.status(401);
                return gson.toJson(Map.of("success", false, "message", "Invalid username/password for role " + role));
            }
        } catch (Exception e) {
            res.status(500);
            return gson.toJson(Map.of("success", false, "message", "Internal server error"));
        }
    }
}

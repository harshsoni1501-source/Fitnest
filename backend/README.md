# Fitnest Backend

## How to Run

1. Make sure you have Java 11+ and Maven installed.
2. In the `backend` folder, run:
   
   ```sh
   mvn clean package
   java -cp target/fitnest-backend-1.0-SNAPSHOT.jar src.FitnestServer
   ```

- The server will start on port 4567.
- Endpoints:
  - `POST /api/send-otp` (body: `{ "mobile": "..." }`)
  - `POST /api/verify-otp` (body: `{ "mobile": "...", "otp": "..." }`)
  - `GET /api/products?category=men|women`

## Notes
- Uses Spark Java, H2 (file-based), and Gson.
- Product data is static for now; cart/user DB integration can be added next.

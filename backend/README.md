# Fitnest Backend

## How to Run

1. Make sure you have Java 11+ and Maven installed.
2. In the `backend` folder, run:

   ```powershell
   mvn clean package
   java -cp target/fitnest-backend-1.0-SNAPSHOT.jar src.FitnestServer
   ```

   Or alternatively:

   ```powershell
   mvn exec:java -Dexec.mainClass="src.FitnestServer"
   ```

- The server will start on port 4567.
- Static files are served from `../frontend/` directory.

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/auth/login` (body: `{ "username": "...", "password": "...", "role": "buyer|seller" }`) - Role-based login
- `GET /api/products` - Get all products
- `POST /api/products` - Add new product (for sellers)
- `POST /api/cart/add` - Add to cart
- `GET /api/cart` - Get cart
- `POST /api/cart/remove` - Remove from cart
- `POST /api/order/checkout` - Place order
- `GET /api/orders/history` - Get order history

## Testing Login

Use PowerShell to test the login endpoint:

```powershell
# Successful buyer login
Invoke-RestMethod -Uri 'http://localhost:4567/api/auth/login' -Method POST -Body (@{ username='buyer1'; password='pass1'; role='buyer' } | ConvertTo-Json) -ContentType 'application/json'

# Successful seller login
Invoke-RestMethod -Uri 'http://localhost:4567/api/auth/login' -Method POST -Body (@{ username='seller1'; password='pass1'; role='seller' } | ConvertTo-Json) -ContentType 'application/json'

# Failed login
Invoke-RestMethod -Uri 'http://localhost:4567/api/auth/login' -Method POST -Body (@{ username='buyer1'; password='wrong'; role='buyer' } | ConvertTo-Json) -ContentType 'application/json'
```

## Notes
- Uses Spark Java, H2 (file-based), and Gson.
- Authentication is demo-only with in-memory users; not for production.
- Port is 4567 (not 8080 as assumed).

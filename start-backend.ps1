# Fitnest Backend Startup Script
Write-Host "Starting Fitnest Backend Server..." -ForegroundColor Green
Write-Host ""

cd backend

# Check if Maven is available
if (-not (Get-Command mvn -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Error: Maven (mvn) is not found in PATH" -ForegroundColor Red
    Write-Host "Please install Maven or add it to your PATH" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Maven found" -ForegroundColor Green
Write-Host ""
Write-Host "Starting Spring Boot application on http://localhost:8080" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the backend
mvn spring-boot:run


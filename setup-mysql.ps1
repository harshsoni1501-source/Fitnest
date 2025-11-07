# MySQL Setup Script for Fitnest
Write-Host "Setting up MySQL database for Fitnest..." -ForegroundColor Cyan
Write-Host ""

# Check if MySQL is running
$mysqlService = Get-Service -Name "*mysql*" -ErrorAction SilentlyContinue
if ($mysqlService -and $mysqlService.Status -eq 'Running') {
    Write-Host "✅ MySQL service is running" -ForegroundColor Green
} else {
    Write-Host "❌ MySQL service is not running. Please start MySQL first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "To set up the database and user, run these SQL commands in MySQL:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Connect to MySQL as root:" -ForegroundColor Cyan
Write-Host "   mysql -u root -p" -ForegroundColor White
Write-Host ""
Write-Host "2. Run these SQL commands:" -ForegroundColor Cyan
Write-Host ""
Write-Host "   CREATE DATABASE IF NOT EXISTS fitnest;" -ForegroundColor White
Write-Host "   CREATE USER IF NOT EXISTS 'fitnest'@'localhost' IDENTIFIED BY 'fitnest123';" -ForegroundColor White
Write-Host "   GRANT ALL PRIVILEGES ON fitnest.* TO 'fitnest'@'localhost';" -ForegroundColor White
Write-Host "   FLUSH PRIVILEGES;" -ForegroundColor White
Write-Host ""
Write-Host "Or use the schema file:" -ForegroundColor Cyan
Write-Host "   mysql -u root -p < fitnest_schema.sql" -ForegroundColor White
Write-Host ""


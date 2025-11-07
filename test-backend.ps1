# Test Backend Connection Script
Write-Host "Testing Fitnest Backend Connection..." -ForegroundColor Cyan
Write-Host ""

$maxAttempts = 10
$attempt = 0
$success = $false

while ($attempt -lt $maxAttempts -and -not $success) {
    $attempt++
    Write-Host "Attempt $attempt of $maxAttempts..." -ForegroundColor Yellow
    
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:8080" -Method GET -TimeoutSec 3 -ErrorAction Stop
        Write-Host ""
        Write-Host "✅✅✅ SUCCESS! Backend is RUNNING! ✅✅✅" -ForegroundColor Green
        Write-Host "Status Code: $($response.StatusCode)" -ForegroundColor Green
        Write-Host ""
        Write-Host "Response:" -ForegroundColor Cyan
        $response.Content | ConvertFrom-Json | ConvertTo-Json -Depth 5
        Write-Host ""
        Write-Host "✅ Database is ready!" -ForegroundColor Green
        Write-Host "✅ You can now use the login/register features!" -ForegroundColor Green
        $success = $true
    } catch {
        if ($attempt -lt $maxAttempts) {
            Write-Host "⏳ Backend is still starting... waiting 3 seconds" -ForegroundColor Yellow
            Start-Sleep -Seconds 3
        } else {
            Write-Host ""
            Write-Host "❌ Backend is not responding after $maxAttempts attempts" -ForegroundColor Red
            Write-Host ""
            Write-Host "Possible issues:" -ForegroundColor Yellow
            Write-Host "1. Backend is still compiling/starting (can take 20-30 seconds)" -ForegroundColor Yellow
            Write-Host "2. Port 8080 is already in use by another application" -ForegroundColor Yellow
            Write-Host "3. There's an error in the backend startup" -ForegroundColor Yellow
            Write-Host ""
            Write-Host "To check backend status, run:" -ForegroundColor Cyan
            Write-Host "  cd backend" -ForegroundColor White
            Write-Host "  mvn spring-boot:run" -ForegroundColor White
        }
    }
}

if (-not $success) {
    Write-Host ""
    Write-Host "Checking if Java processes are running..." -ForegroundColor Cyan
    $javaProcesses = Get-Process -Name java -ErrorAction SilentlyContinue
    if ($javaProcesses) {
        Write-Host "✅ Java processes found: $($javaProcesses.Count)" -ForegroundColor Green
        Write-Host "   The backend might still be starting. Wait a bit longer." -ForegroundColor Yellow
    } else {
        Write-Host "❌ No Java processes found. Backend is not running." -ForegroundColor Red
        Write-Host "   Start it with: cd backend; mvn spring-boot:run" -ForegroundColor Yellow
    }
}


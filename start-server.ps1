# PowerShell script to start the React development server
# This script fixes the PATH issue temporarily

$env:PATH = "C:\Program Files\nodejs;$env:PATH"

Write-Host "Starting React development server..."
Write-Host "Node.js version:"
node --version
Write-Host "npm version:"
npm --version
Write-Host ""
Write-Host "Compiling application..."
Write-Host "Once compiled, the app will be available at: http://localhost:3000"
Write-Host ""

npm start


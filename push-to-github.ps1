# PowerShell script to push to GitHub
# Run this after creating your GitHub repository

Write-Host "🚀 Smart Bank App - GitHub Push Script" -ForegroundColor Cyan
Write-Host ""

# Get GitHub username
$githubUsername = Read-Host "Enter your GitHub username"

# Get repository name
$repoName = Read-Host "Enter repository name (or press Enter for 'smart-bank-app')"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "smart-bank-app"
}

Write-Host ""
Write-Host "Setting up remote and pushing..." -ForegroundColor Yellow

# Remove existing remote if any
git remote remove origin 2>$null

# Add remote
git remote add origin "https://github.com/$githubUsername/$repoName.git"

# Rename branch to main
git branch -M main

# Push to GitHub
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 View your repo at: https://github.com/$githubUsername/$repoName" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ Push failed. Make sure:" -ForegroundColor Red
    Write-Host "   1. You created the repository on GitHub" -ForegroundColor Yellow
    Write-Host "   2. You're authenticated (GitHub will prompt for credentials)" -ForegroundColor Yellow
    Write-Host "   3. The repository name matches: $repoName" -ForegroundColor Yellow
}


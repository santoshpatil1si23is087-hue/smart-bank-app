# 🚀 Push to GitHub - Step by Step Guide

## Step 1: Initialize Git Repository

Run these commands in PowerShell (you're already in the project folder):

```powershell
git init
git add .
git commit -m "Initial commit: Smart Bank mobile banking app"
```

## Step 2: Create GitHub Repository

1. Go to **https://github.com** and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in:
   - **Repository name:** `smart-bank-app` (or any name you like)
   - **Description:** "User-centric mobile banking web application for low-tech users"
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 3: Connect and Push

After creating the repo, GitHub will show you commands. Use these:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/smart-bank-app.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 4: Verify

- Go to your GitHub repository page
- You should see all your files there!

---

## 🔄 Future Updates

When you make changes, use:

```powershell
git add .
git commit -m "Description of changes"
git push
```

---

## 📝 Quick Commands Reference

```powershell
# Check status
git status

# See what changed
git diff

# Add all files
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull
```


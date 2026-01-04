# Quick Start Guide

## 🚀 How to Run the Smart Bank App

### Option 1: Using Python (Recommended)
1. Open PowerShell or Command Prompt in this folder
2. Run this command:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and go to: **http://localhost:8000**
4. Click on `index.html` or it should open automatically

### Option 2: Direct File Open (Simplest)
1. Simply double-click `index.html`
2. It will open in your default browser
3. ⚠️ Note: Some features work better with a local server

### Option 3: Using Node.js (if installed)
1. Install http-server globally:
   ```bash
   npm install -g http-server
   ```
2. Run:
   ```bash
   http-server
   ```
3. Open: **http://localhost:8080**

### Option 4: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📱 First Time Login

1. Enter any **10-digit mobile number** (e.g., `9876543210`)
2. Click **"Send OTP"**
3. A demo OTP will appear in an alert popup
4. Enter that OTP and click **"Verify & Login"**
5. You'll be redirected to the dashboard

**Default Balance:** ₹10,000.00 (for new users)

---

## 🎯 Features to Try

- ✅ **Dashboard** - View balance and quick actions
- ✅ **Check Balance** - See detailed account information
- ✅ **Send Money** - Follow 3-step process to transfer money
- ✅ **Transactions** - View and filter transaction history
- ✅ **Language Toggle** - Switch between English and Hindi
- ✅ **Help** - Access user guides

---

## 💡 Tips

- Data is stored in browser's LocalStorage
- Each browser profile has separate data
- Clear browser cache to reset data
- Works offline (with some limitations)

---

## 🛑 To Stop the Server

Press `Ctrl + C` in the terminal where the server is running.


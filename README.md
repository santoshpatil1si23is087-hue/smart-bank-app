# Smart Bank - User-Centric Mobile Banking App

A simple, accessible mobile banking web application designed for low-tech users, especially those in rural areas. The app prioritizes simplicity, accessibility, and security with an intuitive interface that requires no training.

## Features

### Core Features
- **Simple Login**: Mobile number + OTP authentication (mock OTP for demo)
- **Dashboard**: Quick access to all banking features
- **Check Balance**: View account balance with refresh option
- **Send Money**: Step-by-step guided money transfer process
- **Transaction History**: View all past transactions with filtering options
- **Help Section**: User guide and security tips

### Accessibility Features
- **Large Buttons**: Easy-to-tap buttons with clear icons
- **High Contrast Colors**: Improved visibility for all users
- **Language Toggle**: Switch between English and Hindi
- **ARIA Labels**: Screen reader support
- **Mobile-First Design**: Optimized for smartphone screens
- **Offline Detection**: Graceful handling of offline scenarios

## Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox
- **JavaScript (Vanilla JS)**: No frameworks, pure JavaScript
- **Bootstrap 5**: Responsive UI components
- **Font Awesome**: Icons for better visual communication
- **LocalStorage**: Client-side data persistence (no backend required)

## Project Structure

```
smart-bank-app/
│
├── index.html          # Login page
├── dashboard.html      # Main dashboard
├── check-balance.html  # Balance check page
├── send-money.html     # Money transfer flow
├── transactions.html   # Transaction history
├── help.html          # Help and support
│
├── css/
│   └── style.css      # Main stylesheet
│
├── js/
│   ├── app.js         # Main application logic
│   ├── auth.js        # Authentication & login
│   ├── data.js        # Data management (LocalStorage)
│   ├── i18n.js        # Language/internationalization
│   ├── dashboard.js   # Dashboard functionality
│   ├── send-money.js  # Money transfer logic
│   ├── transactions.js # Transaction history
│   └── check-balance.js # Balance check
│
└── README.md          # This file
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required - runs entirely in the browser

### Installation

1. **Clone or download** this repository
   ```bash
   git clone <repository-url>
   cd smart-bank-app
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server (optional):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Then open http://localhost:8000 in your browser
     ```

### Usage

#### First Time Login
1. Open `index.html` in your browser
2. Enter any 10-digit mobile number (e.g., `9876543210`)
3. Click "Send OTP"
4. A demo OTP will be shown in an alert (in production, this would be sent via SMS)
5. Enter the OTP and click "Verify & Login"
6. You'll be redirected to the dashboard

#### Using the App
- **Dashboard**: View balance and quick actions
- **Check Balance**: See your current account balance
- **Send Money**: Follow the 3-step process to transfer money
- **Transactions**: View and filter your transaction history
- **Help**: Access user guides and support information

#### Language Toggle
- Click the language button (top right) to switch between English and Hindi
- Your preference is saved in localStorage

## Mock Data

The app uses LocalStorage to simulate a backend:
- **Default Balance**: ₹10,000.00 (for new users)
- **OTP**: Displayed in alert for demo purposes
- **Transactions**: Stored locally in browser
- **User Data**: Persists across sessions

## Design Principles

### Simplicity
- Large, clear buttons with icons
- Minimal text, maximum clarity
- Step-by-step guided processes
- No complex navigation

### Accessibility
- High contrast color scheme
- Readable fonts (minimum 16px)
- ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators

### Security
- OTP-based authentication
- Input validation
- Balance verification before transactions
- Session management

### Mobile-First
- Responsive design
- Touch-friendly interface
- Optimized for small screens
- Works offline (with limitations)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Limitations

This is a **frontend-only demo application**:
- No real backend or database
- OTP is shown in alert (not sent via SMS)
- Data is stored in browser LocalStorage only
- No real money transactions
- Data is lost if browser cache is cleared

## Future Enhancements

- Backend integration for real transactions
- SMS OTP service integration
- Biometric authentication
- More language options
- Transaction receipts
- Bill payment features
- Account statements

## Security Notes

⚠️ **This is a demo application for educational purposes only.**
- Do not use for real banking transactions
- OTP is not secure in production (shown in alert)
- No encryption for stored data
- Not suitable for production use without proper security measures

## Contributing

This is a learning project. Feel free to:
- Report bugs
- Suggest improvements
- Add new features
- Improve accessibility

## License

This project is created for educational purposes as part of a design lab project.

## Support

For questions or issues:
- Check the Help section in the app
- Review the code comments
- Contact: support@smartbank.com (demo)

---

**Built with ❤️ for low-tech users**


/**
 * Internationalization (i18n) Support
 * Simple language toggle between English and Hindi
 */

const translations = {
    en: {
        // App Name
        'app-name': 'Smart Bank',
        
        // Login
        'mobile-number': 'Mobile Number',
        'mobile-help': 'Enter your 10 digit mobile number',
        'otp-label': 'Enter OTP',
        'otp-help': 'OTP sent to your mobile number',
        'send-otp': 'Send OTP',
        'verify-login': 'Verify & Login',
        
        // Dashboard
        'account-balance': 'Account Balance',
        'refresh': 'Refresh',
        'quick-actions': 'Quick Actions',
        'check-balance': 'Check Balance',
        'send-money': 'Send Money',
        'transaction-history': 'Transactions',
        'help': 'Help',
        'recent-transactions': 'Recent Transactions',
        'view-all': 'View All Transactions',
        'logout': 'Logout',
        'offline-mode': 'You are offline. Some features may be limited.',
        
        // Send Money
        'step-recipient': 'Recipient',
        'step-amount': 'Amount',
        'step-confirm': 'Confirm',
        'enter-recipient': 'Enter Recipient Details',
        'recipient-mobile': 'Recipient Mobile Number',
        'recipient-name': 'Recipient Name (Optional)',
        'enter-amount': 'Enter Amount',
        'amount': 'Amount',
        'quick-amount': 'Quick Amount:',
        'remarks': 'Remarks (Optional)',
        'next': 'Next',
        'back': 'Back',
        'confirm-transaction': 'Confirm Transaction',
        'recipient': 'Recipient:',
        'confirm-message': 'Please review the details before confirming.',
        'confirm-send': 'Confirm & Send',
        'transaction-success': 'Transaction successful!',
        
        // Transactions
        'all-transactions': 'All',
        'sent': 'Sent',
        'received': 'Received',
        'all-time': 'All Time',
        'today': 'Today',
        'this-week': 'This Week',
        'this-month': 'This Month',
        'no-transactions': 'No transactions found',
        
        // Check Balance
        'account-details': 'Account Details',
        'account-number': 'Account Number:',
        'account-type': 'Account Type:',
        'savings-account': 'Savings Account',
        
        // Help
        'how-to-send-money': 'How to Send Money',
        'help-step1': 'Click on "Send Money" button',
        'help-step2': 'Enter recipient mobile number',
        'help-step3': 'Enter the amount you want to send',
        'help-step4': 'Review and confirm the transaction',
        'how-to-check-balance': 'How to Check Balance',
        'help-balance-step1': 'Click on "Check Balance" button',
        'help-balance-step2': 'Your current balance will be displayed',
        'help-balance-step3': 'Click "Refresh" to update the balance',
        'security-tips': 'Security Tips',
        'security-tip1': 'Never share your OTP with anyone',
        'security-tip2': 'Always verify recipient details before sending money',
        'security-tip3': 'Logout when you finish using the app',
        'security-tip4': 'Keep your mobile number secure',
        'contact-support': 'Contact Support',
        'support-info': 'For any issues or queries, please contact our customer support:',
        'support-phone': '1800-XXX-XXXX',
        'support-email': 'support@smartbank.com'
    },
    hi: {
        // App Name
        'app-name': 'स्मार्ट बैंक',
        
        // Login
        'mobile-number': 'मोबाइल नंबर',
        'mobile-help': 'अपना 10 अंकों का मोबाइल नंबर दर्ज करें',
        'otp-label': 'OTP दर्ज करें',
        'otp-help': 'OTP आपके मोबाइल नंबर पर भेजा गया है',
        'send-otp': 'OTP भेजें',
        'verify-login': 'सत्यापित करें और लॉगिन करें',
        
        // Dashboard
        'account-balance': 'खाता शेष',
        'refresh': 'ताज़ा करें',
        'quick-actions': 'त्वरित कार्य',
        'check-balance': 'शेष जांचें',
        'send-money': 'पैसा भेजें',
        'transaction-history': 'लेनदेन',
        'help': 'मदद',
        'recent-transactions': 'हाल के लेनदेन',
        'view-all': 'सभी लेनदेन देखें',
        'logout': 'लॉगआउट',
        'offline-mode': 'आप ऑफलाइन हैं। कुछ सुविधाएं सीमित हो सकती हैं।',
        
        // Send Money
        'step-recipient': 'प्राप्तकर्ता',
        'step-amount': 'राशि',
        'step-confirm': 'पुष्टि',
        'enter-recipient': 'प्राप्तकर्ता विवरण दर्ज करें',
        'recipient-mobile': 'प्राप्तकर्ता मोबाइल नंबर',
        'recipient-name': 'प्राप्तकर्ता नाम (वैकल्पिक)',
        'enter-amount': 'राशि दर्ज करें',
        'amount': 'राशि',
        'quick-amount': 'त्वरित राशि:',
        'remarks': 'टिप्पणी (वैकल्पिक)',
        'next': 'अगला',
        'back': 'वापस',
        'confirm-transaction': 'लेनदेन की पुष्टि करें',
        'recipient': 'प्राप्तकर्ता:',
        'confirm-message': 'कृपया पुष्टि करने से पहले विवरण की समीक्षा करें।',
        'confirm-send': 'पुष्टि करें और भेजें',
        'transaction-success': 'लेनदेन सफल!',
        
        // Transactions
        'all-transactions': 'सभी',
        'sent': 'भेजा गया',
        'received': 'प्राप्त',
        'all-time': 'सभी समय',
        'today': 'आज',
        'this-week': 'इस सप्ताह',
        'this-month': 'इस महीने',
        'no-transactions': 'कोई लेनदेन नहीं मिला',
        
        // Check Balance
        'account-details': 'खाता विवरण',
        'account-number': 'खाता संख्या:',
        'account-type': 'खाता प्रकार:',
        'savings-account': 'बचत खाता',
        
        // Help
        'how-to-send-money': 'पैसा कैसे भेजें',
        'help-step1': '"पैसा भेजें" बटन पर क्लिक करें',
        'help-step2': 'प्राप्तकर्ता मोबाइल नंबर दर्ज करें',
        'help-step3': 'वह राशि दर्ज करें जो आप भेजना चाहते हैं',
        'help-step4': 'लेनदेन की समीक्षा करें और पुष्टि करें',
        'how-to-check-balance': 'शेष कैसे जांचें',
        'help-balance-step1': '"शेष जांचें" बटन पर क्लिक करें',
        'help-balance-step2': 'आपका वर्तमान शेष प्रदर्शित किया जाएगा',
        'help-balance-step3': 'शेष अपडेट करने के लिए "ताज़ा करें" पर क्लिक करें',
        'security-tips': 'सुरक्षा युक्तियाँ',
        'security-tip1': 'कभी भी अपना OTP किसी के साथ साझा न करें',
        'security-tip2': 'पैसा भेजने से पहले हमेशा प्राप्तकर्ता विवरण सत्यापित करें',
        'security-tip3': 'ऐप का उपयोग समाप्त करने पर लॉगआउट करें',
        'security-tip4': 'अपना मोबाइल नंबर सुरक्षित रखें',
        'contact-support': 'सहायता से संपर्क करें',
        'support-info': 'किसी भी समस्या या प्रश्न के लिए, कृपया हमारी ग्राहक सेवा से संपर्क करें:',
        'support-phone': '1800-XXX-XXXX',
        'support-email': 'support@smartbank.com'
    }
};

// Current language (default: English)
let currentLanguage = localStorage.getItem('language') || 'en';

/**
 * Initialize language on page load
 */
function initLanguage() {
    // Set language from localStorage or default to English
    currentLanguage = localStorage.getItem('language') || 'en';
    updateLanguage();
    
    // Setup language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

/**
 * Toggle between English and Hindi
 */
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
}

/**
 * Update all text elements with translations
 */
function updateLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update current language indicator
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLanguage === 'en' ? 'English' : 'हिंदी';
    }
    
    // Update placeholder attributes
    updatePlaceholders();
}

/**
 * Update placeholder text for form inputs
 */
function updatePlaceholders() {
    const placeholders = {
        en: {
            'mobileNumber': 'Enter 10 digit number',
            'otpInput': '000000',
            'recipientMobile': 'Enter 10 digit number',
            'recipientName': 'Enter name',
            'amount': '0.00',
            'remarks': 'e.g., Payment for services'
        },
        hi: {
            'mobileNumber': '10 अंकों का नंबर दर्ज करें',
            'otpInput': '000000',
            'recipientMobile': '10 अंकों का नंबर दर्ज करें',
            'recipientName': 'नाम दर्ज करें',
            'amount': '0.00',
            'remarks': 'उदा., सेवाओं के लिए भुगतान'
        }
    };
    
    Object.keys(placeholders[currentLanguage]).forEach(id => {
        const element = document.getElementById(id);
        if (element && placeholders[currentLanguage][id]) {
            element.placeholder = placeholders[currentLanguage][id];
        }
    });
}

/**
 * Get translated text by key
 */
function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Initialize language when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}


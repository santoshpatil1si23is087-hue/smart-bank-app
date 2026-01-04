/**
 * Data Management Module
 * Handles localStorage operations for transactions and account data
 */

/**
 * Initialize default data for a new user
 */
function initializeUserData(mobileNumber) {
    const userData = {
        mobileNumber: mobileNumber,
        accountNumber: generateAccountNumber(),
        balance: 10000.00, // Default starting balance
        transactions: [],
        createdAt: new Date().toISOString()
    };
    
    localStorage.setItem(`userData_${mobileNumber}`, JSON.stringify(userData));
    return userData;
}

/**
 * Generate a random account number
 */
function generateAccountNumber() {
    return 'ACC' + Math.floor(1000000000 + Math.random() * 9000000000);
}

/**
 * Get user data
 */
function getUserData() {
    const user = getCurrentUser();
    if (!user) return null;
    
    const userDataKey = `userData_${user.mobileNumber}`;
    const userData = localStorage.getItem(userDataKey);
    
    if (!userData) {
        // Initialize data for new user
        return initializeUserData(user.mobileNumber);
    }
    
    return JSON.parse(userData);
}

/**
 * Save user data
 */
function saveUserData(userData) {
    const user = getCurrentUser();
    if (!user) return false;
    
    const userDataKey = `userData_${user.mobileNumber}`;
    localStorage.setItem(userDataKey, JSON.stringify(userData));
    return true;
}

/**
 * Get account balance
 */
function getBalance() {
    const userData = getUserData();
    return userData ? userData.balance : 0;
}

/**
 * Update balance
 */
function updateBalance(amount, type = 'subtract') {
    const userData = getUserData();
    if (!userData) return false;
    
    if (type === 'subtract') {
        userData.balance -= amount;
    } else if (type === 'add') {
        userData.balance += amount;
    }
    
    return saveUserData(userData);
}

/**
 * Add transaction
 */
function addTransaction(transaction) {
    const userData = getUserData();
    if (!userData) return false;
    
    const newTransaction = {
        id: generateTransactionId(),
        type: transaction.type, // 'sent' or 'received'
        amount: transaction.amount,
        recipientMobile: transaction.recipientMobile || null,
        recipientName: transaction.recipientName || null,
        remarks: transaction.remarks || null,
        status: 'success',
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    };
    
    userData.transactions.unshift(newTransaction); // Add to beginning
    
    // Keep only last 100 transactions
    if (userData.transactions.length > 100) {
        userData.transactions = userData.transactions.slice(0, 100);
    }
    
    return saveUserData(userData);
}

/**
 * Generate unique transaction ID
 */
function generateTransactionId() {
    return 'TXN' + Date.now() + Math.floor(Math.random() * 1000);
}

/**
 * Get transactions
 */
function getTransactions(filterType = 'all', filterPeriod = 'all') {
    const userData = getUserData();
    if (!userData) return [];
    
    let transactions = [...userData.transactions];
    
    // Filter by type
    if (filterType !== 'all') {
        transactions = transactions.filter(t => t.type === filterType);
    }
    
    // Filter by period
    if (filterPeriod !== 'all') {
        const now = new Date();
        transactions = transactions.filter(t => {
            const transactionDate = new Date(t.timestamp);
            
            switch (filterPeriod) {
                case 'today':
                    return transactionDate.toDateString() === now.toDateString();
                case 'week':
                    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                    return transactionDate >= weekAgo;
                case 'month':
                    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                    return transactionDate >= monthAgo;
                default:
                    return true;
            }
        });
    }
    
    return transactions;
}

/**
 * Get recent transactions (last 5)
 */
function getRecentTransactions(limit = 5) {
    const transactions = getTransactions();
    return transactions.slice(0, limit);
}

/**
 * Format currency
 */
function formatCurrency(amount) {
    return '₹' + parseFloat(amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
    } else {
        return date.toLocaleDateString('en-IN', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
        });
    }
}

/**
 * Format time
 */
function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}


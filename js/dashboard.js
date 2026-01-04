/**
 * Dashboard Module
 * Handles dashboard functionality and display
 */

/**
 * Load and display account balance
 */
function loadBalance() {
    const balance = getBalance();
    const balanceElement = document.getElementById('accountBalance');
    if (balanceElement) {
        balanceElement.textContent = formatCurrency(balance);
    }
}

/**
 * Load and display recent transactions
 */
function loadRecentTransactions() {
    const transactions = getRecentTransactions(5);
    const transactionsList = document.getElementById('recentTransactionsList');
    
    if (!transactionsList) return;
    
    if (transactions.length === 0) {
        transactionsList.innerHTML = `
            <div class="text-center py-3 text-muted">
                <i class="fas fa-inbox mb-2" style="font-size: 2rem; opacity: 0.5;"></i>
                <p class="mb-0">No recent transactions</p>
            </div>
        `;
        return;
    }
    
    transactionsList.innerHTML = transactions.map(transaction => {
        const icon = transaction.type === 'sent' ? 'fa-arrow-up' : 'fa-arrow-down';
        const colorClass = transaction.type === 'sent' ? 'text-danger' : 'text-success';
        const prefix = transaction.type === 'sent' ? '-' : '+';
        
        return `
            <div class="transaction-item ${transaction.type}">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <i class="fas ${icon} me-3 ${colorClass}" style="font-size: 1.5rem;"></i>
                        <div>
                            <div class="fw-bold">${transaction.recipientName || transaction.recipientMobile || 'Transaction'}</div>
                            <small class="text-muted">${formatDate(transaction.timestamp)}</small>
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold ${colorClass}">${prefix}${formatCurrency(transaction.amount)}</div>
                        <small class="badge bg-success">${transaction.status}</small>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Setup refresh balance button
 */
function setupRefreshBalance() {
    const refreshBtn = document.getElementById('refreshBalance');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            // Add loading state
            const icon = refreshBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-spin');
            }
            
            // Simulate API call delay
            setTimeout(() => {
                loadBalance();
                if (icon) {
                    icon.classList.remove('fa-spin');
                }
            }, 1000);
        });
    }
}

/**
 * Check online/offline status
 */
function checkOnlineStatus() {
    const offlineIndicator = document.getElementById('offlineIndicator');
    if (!offlineIndicator) return;
    
    function updateStatus() {
        if (navigator.onLine) {
            offlineIndicator.style.display = 'none';
        } else {
            offlineIndicator.style.display = 'block';
        }
    }
    
    // Check initial status
    updateStatus();
    
    // Listen for online/offline events
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
}

/**
 * Initialize dashboard
 */
function initDashboard() {
    // Load balance
    loadBalance();
    
    // Load recent transactions
    loadRecentTransactions();
    
    // Setup refresh button
    setupRefreshBalance();
    
    // Check online status
    checkOnlineStatus();
    
    // Display account number if available
    const userData = getUserData();
    if (userData) {
        // Account number can be displayed if needed
    }
}

// Initialize dashboard when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
} else {
    initDashboard();
}


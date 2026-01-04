/**
 * Check Balance Module
 * Handles balance display and refresh
 */

/**
 * Initialize check balance page
 */
function initCheckBalance() {
    // Load balance
    loadBalance();
    
    // Load account details
    loadAccountDetails();
    
    // Setup refresh button
    setupRefreshButton();
}

/**
 * Load and display balance
 */
function loadBalance() {
    const balance = getBalance();
    const balanceElement = document.getElementById('currentBalance');
    
    if (balanceElement) {
        balanceElement.textContent = formatCurrency(balance);
    }
}

/**
 * Load and display account details
 */
function loadAccountDetails() {
    const userData = getUserData();
    
    if (!userData) return;
    
    const accountNumber = document.getElementById('accountNumber');
    const accountMobile = document.getElementById('accountMobile');
    
    if (accountNumber) {
        accountNumber.textContent = userData.accountNumber || '-';
    }
    
    if (accountMobile) {
        const user = getCurrentUser();
        if (user) {
            accountMobile.textContent = user.mobileNumber;
        }
    }
}

/**
 * Setup refresh balance button
 */
function setupRefreshButton() {
    const refreshBtn = document.getElementById('refreshBalanceBtn');
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            // Add loading state
            const icon = refreshBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-spin');
            }
            
            refreshBtn.disabled = true;
            refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Refreshing...';
            
            // Simulate API call delay
            setTimeout(() => {
                loadBalance();
                
                // Remove loading state
                if (icon) {
                    icon.classList.remove('fa-spin');
                }
                
                refreshBtn.disabled = false;
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt me-2"></i>Refresh Balance';
            }, 1000);
        });
    }
}

// Initialize check balance when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCheckBalance);
} else {
    initCheckBalance();
}


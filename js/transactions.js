/**
 * Transactions Module
 * Handles transaction history display and filtering
 */

/**
 * Initialize transactions page
 */
function initTransactions() {
    // Load transactions
    loadTransactions();
    
    // Setup filters
    setupFilters();
}

/**
 * Load and display transactions
 */
function loadTransactions(filterType = 'all', filterPeriod = 'all') {
    const transactions = getTransactions(filterType, filterPeriod);
    const transactionsList = document.getElementById('transactionsList');
    const emptyState = document.getElementById('emptyState');
    
    if (!transactionsList) return;
    
    // Show empty state if no transactions
    if (transactions.length === 0) {
        transactionsList.innerHTML = '';
        if (emptyState) {
            emptyState.style.display = 'block';
        }
        return;
    }
    
    // Hide empty state
    if (emptyState) {
        emptyState.style.display = 'none';
    }
    
    // Render transactions
    transactionsList.innerHTML = transactions.map(transaction => {
        return renderTransaction(transaction);
    }).join('');
}

/**
 * Render a single transaction card
 */
function renderTransaction(transaction) {
    const icon = transaction.type === 'sent' ? 'fa-arrow-up' : 'fa-arrow-down';
    const typeText = transaction.type === 'sent' ? 'Sent' : 'Received';
    const amountPrefix = transaction.type === 'sent' ? '-' : '+';
    const amountClass = transaction.type === 'sent' ? 'text-danger' : 'text-success';
    const iconBgClass = transaction.type === 'sent' ? 'bg-danger' : 'bg-success';
    
    return `
        <div class="transaction-card ${transaction.type}">
            <div class="transaction-header">
                <div class="transaction-type">
                    <div class="transaction-icon ${iconBgClass} text-white">
                        <i class="fas ${icon}" aria-hidden="true"></i>
                    </div>
                    <div>
                        <div class="fw-bold">${transaction.recipientName || transaction.recipientMobile || 'Transaction'}</div>
                        <small class="text-muted">${typeText}</small>
                    </div>
                </div>
                <div class="transaction-amount ${amountClass}">
                    ${amountPrefix}${formatCurrency(transaction.amount)}
                </div>
            </div>
            <div class="transaction-details">
                <div class="transaction-meta">
                    <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>${formatDate(transaction.timestamp)}</span>
                    <span><i class="fas fa-clock me-1" aria-hidden="true"></i>${formatTime(transaction.timestamp)}</span>
                </div>
                ${transaction.remarks ? `<div class="mt-2"><small class="text-muted"><i class="fas fa-comment me-1"></i>${transaction.remarks}</small></div>` : ''}
                <div class="mt-2">
                    <span class="transaction-status success">${transaction.status}</span>
                    <small class="text-muted ms-2">ID: ${transaction.id}</small>
                </div>
            </div>
        </div>
    `;
}

/**
 * Setup filter handlers
 */
function setupFilters() {
    const filterType = document.getElementById('filterType');
    const filterPeriod = document.getElementById('filterPeriod');
    
    if (filterType) {
        filterType.addEventListener('change', () => {
            const type = filterType.value;
            const period = filterPeriod ? filterPeriod.value : 'all';
            loadTransactions(type, period);
        });
    }
    
    if (filterPeriod) {
        filterPeriod.addEventListener('change', () => {
            const type = filterType ? filterType.value : 'all';
            const period = filterPeriod.value;
            loadTransactions(type, period);
        });
    }
}

// Initialize transactions when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTransactions);
} else {
    initTransactions();
}


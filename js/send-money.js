/**
 * Send Money Module
 * Handles the send money flow with step-by-step guidance
 */

let sendMoneyData = {
    recipientMobile: '',
    recipientName: '',
    amount: 0,
    remarks: ''
};

/**
 * Initialize send money page
 */
function initSendMoney() {
    // Setup step navigation
    setupStepNavigation();
    
    // Setup quick amount buttons
    setupQuickAmountButtons();
    
    // Setup form validation
    setupFormValidation();
}

/**
 * Setup step navigation
 */
function setupStepNavigation() {
    const nextToAmount = document.getElementById('nextToAmount');
    const nextToConfirm = document.getElementById('nextToConfirm');
    const backToRecipient = document.getElementById('backToRecipient');
    const backToAmount = document.getElementById('backToAmount');
    const confirmTransaction = document.getElementById('confirmTransaction');
    
    // Step 1 to Step 2
    if (nextToAmount) {
        nextToAmount.addEventListener('click', (e) => {
            e.preventDefault();
            
            const recipientMobile = document.getElementById('recipientMobile').value.trim();
            const recipientName = document.getElementById('recipientName').value.trim();
            
            // Validate recipient mobile
            if (recipientMobile.length !== 10) {
                showError('Please enter a valid 10-digit mobile number.');
                return;
            }
            
            // Check if sending to own number
            const currentUser = getCurrentUser();
            if (currentUser && recipientMobile === currentUser.mobileNumber) {
                showError('You cannot send money to your own number.');
                return;
            }
            
            // Save data and move to next step
            sendMoneyData.recipientMobile = recipientMobile;
            sendMoneyData.recipientName = recipientName || recipientMobile;
            
            goToStep(2);
        });
    }
    
    // Step 2 to Step 3
    if (nextToConfirm) {
        nextToConfirm.addEventListener('click', (e) => {
            e.preventDefault();
            
            const amount = parseFloat(document.getElementById('amount').value);
            const remarks = document.getElementById('remarks').value.trim();
            
            // Validate amount
            if (!amount || amount <= 0) {
                showError('Please enter a valid amount greater than 0.');
                return;
            }
            
            // Check balance
            const balance = getBalance();
            if (amount > balance) {
                showError('Insufficient balance. Your current balance is ' + formatCurrency(balance));
                return;
            }
            
            // Save data and move to next step
            sendMoneyData.amount = amount;
            sendMoneyData.remarks = remarks;
            
            // Update confirmation screen
            updateConfirmationScreen();
            goToStep(3);
        });
    }
    
    // Back to Step 1
    if (backToRecipient) {
        backToRecipient.addEventListener('click', (e) => {
            e.preventDefault();
            goToStep(1);
        });
    }
    
    // Back to Step 2
    if (backToAmount) {
        backToAmount.addEventListener('click', (e) => {
            e.preventDefault();
            goToStep(2);
        });
    }
    
    // Confirm transaction
    if (confirmTransaction) {
        confirmTransaction.addEventListener('click', (e) => {
            e.preventDefault();
            processTransaction();
        });
    }
}

/**
 * Go to specific step
 */
function goToStep(stepNumber) {
    // Hide all step contents
    for (let i = 1; i <= 3; i++) {
        const stepContent = document.getElementById(`stepContent${i}`);
        const step = document.getElementById(`step${i}`);
        
        if (stepContent) {
            stepContent.style.display = 'none';
        }
        
        if (step) {
            step.classList.remove('active', 'completed');
        }
    }
    
    // Show current step content
    const currentStepContent = document.getElementById(`stepContent${stepNumber}`);
    const currentStep = document.getElementById(`step${stepNumber}`);
    
    if (currentStepContent) {
        currentStepContent.style.display = 'block';
    }
    
    if (currentStep) {
        currentStep.classList.add('active');
    }
    
    // Mark previous steps as completed
    for (let i = 1; i < stepNumber; i++) {
        const prevStep = document.getElementById(`step${i}`);
        if (prevStep) {
            prevStep.classList.add('completed');
        }
    }
    
    // Hide error messages
    hideMessages();
}

/**
 * Update confirmation screen with transaction details
 */
function updateConfirmationScreen() {
    const confirmRecipient = document.getElementById('confirmRecipient');
    const confirmMobile = document.getElementById('confirmMobile');
    const confirmAmount = document.getElementById('confirmAmount');
    const confirmRemarks = document.getElementById('confirmRemarks');
    
    if (confirmRecipient) {
        confirmRecipient.textContent = sendMoneyData.recipientName || sendMoneyData.recipientMobile;
    }
    
    if (confirmMobile) {
        confirmMobile.textContent = sendMoneyData.recipientMobile;
    }
    
    if (confirmAmount) {
        confirmAmount.textContent = formatCurrency(sendMoneyData.amount);
    }
    
    if (confirmRemarks) {
        confirmRemarks.textContent = sendMoneyData.remarks || '-';
    }
}

/**
 * Setup quick amount buttons
 */
function setupQuickAmountButtons() {
    const quickAmountButtons = document.querySelectorAll('.quick-amount-btn');
    
    quickAmountButtons.forEach(button => {
        button.addEventListener('click', () => {
            const amount = button.getAttribute('data-amount');
            const amountInput = document.getElementById('amount');
            
            if (amountInput) {
                amountInput.value = amount;
                amountInput.focus();
            }
        });
    });
}

/**
 * Setup form validation
 */
function setupFormValidation() {
    const recipientMobile = document.getElementById('recipientMobile');
    const amount = document.getElementById('amount');
    
    // Mobile number validation
    if (recipientMobile) {
        recipientMobile.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
    
    // Amount validation
    if (amount) {
        amount.addEventListener('input', (e) => {
            // Allow only numbers and one decimal point
            e.target.value = e.target.value.replace(/[^0-9.]/g, '');
            
            // Prevent multiple decimal points
            const parts = e.target.value.split('.');
            if (parts.length > 2) {
                e.target.value = parts[0] + '.' + parts.slice(1).join('');
            }
        });
    }
}

/**
 * Process transaction
 */
function processTransaction() {
    const confirmBtn = document.getElementById('confirmTransaction');
    const successMessage = document.getElementById('successMessage');
    
    // Disable button during processing
    if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
    }
    
    // Simulate API call delay
    setTimeout(() => {
        try {
            // Update balance
            const success = updateBalance(sendMoneyData.amount, 'subtract');
            
            if (!success) {
                throw new Error('Failed to update balance');
            }
            
            // Add transaction
            const transaction = {
                type: 'sent',
                amount: sendMoneyData.amount,
                recipientMobile: sendMoneyData.recipientMobile,
                recipientName: sendMoneyData.recipientName,
                remarks: sendMoneyData.remarks
            };
            
            addTransaction(transaction);
            
            // Show success message
            if (successMessage) {
                successMessage.style.display = 'block';
            }
            
            // Redirect to dashboard after 2 seconds
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 2000);
            
        } catch (error) {
            showError('Transaction failed. Please try again.');
            
            // Re-enable button
            if (confirmBtn) {
                confirmBtn.disabled = false;
                confirmBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Confirm & Send';
            }
        }
    }, 1500);
}

/**
 * Show error message
 */
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
}

/**
 * Hide all messages
 */
function hideMessages() {
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
    
    if (successMessage) {
        successMessage.style.display = 'none';
    }
}

// Initialize send money when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSendMoney);
} else {
    initSendMoney();
}


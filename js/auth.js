/**
 * Authentication Module
 * Handles login, OTP verification, and session management
 */

// Mock OTP storage (in real app, this would be handled by backend)
let mockOTP = null;
let otpExpiry = null;

/**
 * Check if user is logged in
 */
function isLoggedIn() {
    const user = localStorage.getItem('currentUser');
    return user !== null;
}

/**
 * Get current user
 */
function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

/**
 * Set current user
 */
function setCurrentUser(mobileNumber) {
    const user = {
        mobileNumber: mobileNumber,
        loginTime: new Date().toISOString()
    };
    localStorage.setItem('currentUser', JSON.stringify(user));
}

/**
 * Logout user
 */
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

/**
 * Generate mock OTP (6 digits)
 */
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Send OTP (mock implementation)
 */
function sendOTP(mobileNumber) {
    // Generate OTP
    mockOTP = generateOTP();
    otpExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes expiry
    
    // Store OTP in sessionStorage (for demo purposes)
    sessionStorage.setItem('mockOTP', mockOTP);
    sessionStorage.setItem('otpExpiry', otpExpiry.toString());
    
    // In real app, this would send OTP via SMS
    console.log(`[MOCK] OTP for ${mobileNumber}: ${mockOTP}`);
    
    // Show OTP in alert for demo (remove in production)
    alert(`Demo OTP: ${mockOTP}\n\n(In production, this would be sent via SMS)`);
    
    return true;
}

/**
 * Verify OTP
 */
function verifyOTP(enteredOTP) {
    const storedOTP = sessionStorage.getItem('mockOTP');
    const expiry = parseInt(sessionStorage.getItem('otpExpiry') || '0');
    
    // Check if OTP expired
    if (Date.now() > expiry) {
        return { success: false, message: 'OTP has expired. Please request a new one.' };
    }
    
    // Verify OTP
    if (enteredOTP === storedOTP) {
        // Clear OTP from storage
        sessionStorage.removeItem('mockOTP');
        sessionStorage.removeItem('otpExpiry');
        return { success: true };
    } else {
        return { success: false, message: 'Invalid OTP. Please try again.' };
    }
}

/**
 * Initialize authentication on page load
 */
function initAuth() {
    // Check if user is logged in (except on login page)
    if (!window.location.pathname.includes('index.html') && 
        window.location.pathname !== '/' && 
        !window.location.pathname.endsWith('/')) {
        
        if (!isLoggedIn()) {
            window.location.href = 'index.html';
            return;
        }
    }
    
    // If on login page and already logged in, redirect to dashboard
    if (window.location.pathname.includes('index.html') || 
        window.location.pathname === '/' || 
        window.location.pathname.endsWith('/')) {
        
        if (isLoggedIn()) {
            window.location.href = 'dashboard.html';
            return;
        }
    }
    
    // Setup logout button if exists
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to logout?')) {
                logout();
            }
        });
    }
    
    // Display user mobile number if logged in
    const userMobile = document.getElementById('userMobile');
    if (userMobile) {
        const user = getCurrentUser();
        if (user) {
            userMobile.textContent = user.mobileNumber;
        }
    }
}

/**
 * Setup login form handlers
 */
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const mobileInput = document.getElementById('mobileNumber');
    const otpSection = document.getElementById('otpSection');
    const otpInput = document.getElementById('otpInput');
    const loginBtn = document.getElementById('loginBtn');
    const verifyBtn = document.getElementById('verifyBtn');
    const errorMessage = document.getElementById('errorMessage');
    
    if (!loginForm) return;
    
    // Mobile number input validation
    if (mobileInput) {
        mobileInput.addEventListener('input', (e) => {
            // Only allow numbers
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
    
    // OTP input validation
    if (otpInput) {
        otpInput.addEventListener('input', (e) => {
            // Only allow numbers
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
    
    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        errorMessage.style.display = 'none';
        
        const mobileNumber = mobileInput.value.trim();
        
        // Validate mobile number
        if (mobileNumber.length !== 10) {
            showError('Please enter a valid 10-digit mobile number.');
            return;
        }
        
        // If OTP section is hidden, send OTP
        if (otpSection.style.display === 'none' || !otpSection.style.display) {
            // Send OTP
            const sent = sendOTP(mobileNumber);
            
            if (sent) {
                // Show OTP section
                otpSection.style.display = 'block';
                loginBtn.style.display = 'none';
                verifyBtn.style.display = 'block';
                otpInput.focus();
            }
        }
    });
    
    // Verify OTP button
    if (verifyBtn) {
        verifyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            errorMessage.style.display = 'none';
            
            const mobileNumber = mobileInput.value.trim();
            const otp = otpInput.value.trim();
            
            if (otp.length !== 6) {
                showError('Please enter a valid 6-digit OTP.');
                return;
            }
            
            // Verify OTP
            const result = verifyOTP(otp);
            
            if (result.success) {
                // Login successful
                setCurrentUser(mobileNumber);
                window.location.href = 'dashboard.html';
            } else {
                showError(result.message || 'Invalid OTP. Please try again.');
            }
        });
    }
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

// Initialize auth when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initAuth();
        setupLoginForm();
    });
} else {
    initAuth();
    setupLoginForm();
}


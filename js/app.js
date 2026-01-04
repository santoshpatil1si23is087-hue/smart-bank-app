/**
 * Main Application Module
 * Handles general app functionality and initialization
 */

/**
 * Initialize application
 */
function initApp() {
    // Check authentication
    if (typeof initAuth === 'function') {
        initAuth();
    }
    
    // Initialize language
    if (typeof initLanguage === 'function') {
        initLanguage();
    }
    
    // Setup offline detection
    setupOfflineDetection();
    
    // Setup error handling
    setupErrorHandling();
}

/**
 * Setup offline detection
 */
function setupOfflineDetection() {
    // This is handled in dashboard.js, but can be extended here if needed
    window.addEventListener('online', () => {
        console.log('App is online');
    });
    
    window.addEventListener('offline', () => {
        console.log('App is offline');
    });
}

/**
 * Setup global error handling
 */
function setupErrorHandling() {
    window.addEventListener('error', (event) => {
        console.error('Global error:', event.error);
        // In production, you might want to log this to an error tracking service
    });
    
    window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
        // In production, you might want to log this to an error tracking service
    });
}

/**
 * Utility function to show toast notifications (if needed)
 */
function showToast(message, type = 'info') {
    // Simple toast implementation
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3`;
    toast.style.zIndex = '9999';
    toast.textContent = message;
    toast.setAttribute('role', 'alert');
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}


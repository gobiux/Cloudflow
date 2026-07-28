// Shared authentication utilities
(function () {
  var AUTH_KEY = 'cloudflow_auth';
  var USER_KEY = 'cloudflow_user';

  function clearAuth() {
    try {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(USER_KEY);
      sessionStorage.removeItem(AUTH_KEY);
      sessionStorage.removeItem(USER_KEY);
    } catch (e) {
      // Ignore storage errors
    }
  }

  function isAuthenticated() {
    try {
      return !!(localStorage.getItem(AUTH_KEY) || sessionStorage.getItem(AUTH_KEY));
    } catch (e) {
      return false;
    }
  }

  function getUser() {
    try {
      return JSON.parse(localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  function logout() {
    clearAuth();
    window.location.href = 'index.html';
  }

  function requireAuth() {
    if (!isAuthenticated()) {
      window.location.href = 'index.html';
      return false;
    }
    return true;
  }

  // Expose globally
  window.Auth = {
    clearAuth: clearAuth,
    isAuthenticated: isAuthenticated,
    getUser: getUser,
    logout: logout,
    requireAuth: requireAuth
  };

  // Add click handler for logout links
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.profile-dropdown-item.logout, .logout').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        logout();
      });
    });
  });
})();
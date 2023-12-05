const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

    // function for cookies

    function setCookie (name, days) {
      const expires = new Date(); 
      expires.setTime(expires.getTime() + days * 24 * 60 *1000); 
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`; 
    }

    function hasAcceptedCookies() {
      return document.cookie.includes('cookiesAccepted=true'); 
    }; 

    function closeBanner() {
      setCookie('cookiesAccepted', 'true', 50)
      document.getElementById('cookie-banner').style.display = 'none'; 
    }; 

    if (!hasAcceptedCookies()) {
      document.getElementById('accepted-banner').style.display = 'block'; 
    }

      document.getElementById('accept-cookies').addEventListener('click', closebanner); 
  


document.addEventListener('DOMContentLoaded', function() {
    // Function to extract the token from cookies
    function getToken() {
      const cookies = document.cookie.split('; ');
      for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'token') {
          return value;
        }
      }
      return null;
    }
  
    const token = getToken();
  
    if (token) {
      // Send a request to a secure endpoint with the token to get user information
      fetch('https://dummyjson.com/auth/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.username) {
          // Display user information on the profile page
          document.getElementById('username').textContent = `User Name: ${data.username}`;
          document.getElementById('email').textContent = `Email: ${data.email}`;
          document.getElementById('gender').textContent = `Gender: ${data.gender}`;
          document.getElementById('age').textContent = `Age: ${data.age}`;
        } else {
          console.error('User information not found in the response');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      console.error('Token not found in cookies');
    }
  });
  
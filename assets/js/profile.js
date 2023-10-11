

// profile.js

// Function to get the value of a cookie by its name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
          return decodeURIComponent(cookieValue); // Decode the cookie value
      }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  const token = getCookie('token');
  
  if (token) {
      // If a token exists in cookies, extract and display user information
      // You can customize this part based on how your token stores user data
      const userData = parseUserDataFromToken(token); // Replace with your token parsing logic

      if (userData) {
          document.getElementById('username').textContent = `Username: ${userData.username}`;
          document.getElementById('email').textContent = `Email: ${userData.email}`;
          document.getElementById('gender').textContent = `Gender: ${userData.gender}`;
          document.getElementById('age').textContent = `Age: ${userData.age}`;
      } else {
          console.error('User data not found in the token');
      }
  } else {
      console.error('Token not found in cookies');
      // You can redirect to the login page or take any other action as needed
  }
});

// Replace this function with your logic to parse user data from the token
function parseUserDataFromToken(token) {
  try {
      // Parse the token (assuming it's a JSON Web Token, JWT)
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      // Return the user data from the token
      return {
          username: tokenPayload.username,
          email: tokenPayload.email,
          gender: tokenPayload.gender,
          age: tokenPayload.age
      };
  } catch (error) {
      console.error('Error parsing user data from the token:', error);
      return null;
  }
}

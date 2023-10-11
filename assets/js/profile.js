document.addEventListener("DOMContentLoaded", function () {
 

  

  if (token) {
      
      function extractUserInfoFromToken(token) {
         
             
              const tokenPayload = JSON.parse(atob(token.split('.')[1]));
              return {
                  username: tokenPayload.username,
                  email: tokenPayload.email,
                  gender: tokenPayload.gender,
                  age: tokenPayload.age
              };
         
      }

     
      function displayUserInfo() {
          const userData = extractUserInfoFromToken(token);

          if (userData) {
              document.getElementById('username').textContent = `Username: ${userData.username}`;
              document.getElementById('email').textContent = `Email: ${userData.email}`;
              document.getElementById('gender').textContent = `Gender: ${userData.gender}`;
              document.getElementById('age').textContent = `Age: ${userData.age}`;
          } else {
              console.error('User data not found in the token');
          }
      }

  
      displayUserInfo();
  } 
});

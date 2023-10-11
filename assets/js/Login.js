

document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            console.log(data.token); // Print the token to the console
            // Store the token in a cookie
            document.cookie = `token=${data.token}`;
            window.location.href = 'profile.html';
        } 
    })
   
});

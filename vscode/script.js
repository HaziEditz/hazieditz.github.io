// Function to toggle password visibility
document.getElementById('showPassword').addEventListener('click', function() {
    const passwordField = document.getElementById('inpsw');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';  // Show password
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';  // Hide password
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});

// Function to close the popup
function close() {
    document.getElementById('popup').style.display = 'none'; 
}

// Function to handle password access
function access() {
    const inpsw = document.getElementById('inpsw').value;
    const correctPassword = 'hazieditz';

    if (inpsw === correctPassword) {
        document.getElementById('secret').style.display = 'none';  
        document.getElementById('content').style.display = 'block';  
        document.getElementById('p1').style.display = 'none'; 
    } else {
        document.getElementById('secret').style.display = 'block';  
        document.getElementById('content').style.display = 'none';  
        document.getElementById('p1').style.display = 'block'; 
    }  
}

// Function to handle the return action (exit)
function exit() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('secret').style.display = 'block';
}

function login() {
    let username = document.getElementById('user-input').value;
    let password = document.getElementById('password-input').value;
    localStorage.setItem('username', 'harish');
    localStorage.setItem('password', 'admin');
     // Storing username & password in localStorage, overriding them if they exist
    // Will be an API call in production
    if(username === localStorage.getItem('username') && password === localStorage.getItem('password')  && username && password ) {
        window.location = 'resume.html';
    } else {
        document.getElementById('invalid-login').style.display = 'block';
        document.getElementById('user-input').value = ''
        document.getElementById('password-input').value = '';
    }
}

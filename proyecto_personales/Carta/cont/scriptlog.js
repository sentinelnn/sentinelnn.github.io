document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('toggle-password');
    const loginForm = document.getElementById('login-form');

    const predefinedUsername = 'Isabel';
    const predefinedPassword = 'pulgaaventurera123';

    togglePasswordButton.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = passwordInput.value;

        if (username === predefinedUsername && password === predefinedPassword) {
            window.location.href = 'index3.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});

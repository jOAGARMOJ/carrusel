document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        document.getElementById('form-message').innerText = 'Por favor, complete todos los campos.';
        return;
    }

    document.getElementById('form-message').innerText = 'Gracias por contactarnos. Nos pondremos en contacto pronto.';
    document.getElementById('contact-form').reset();
});
document.querySelector('.form').addEventListener('submit', function (event) {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    if (!name.value || !email.value || !message.value) {
        event.preventDefault();
        alert('Please fill in all required fields.');
    }
});

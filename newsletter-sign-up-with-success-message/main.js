const mainCard = document.querySelector('.card');
const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error-message');
const thankYouEmail = document.querySelector('#thank-you-email');
const dismissButton = document.querySelector('#dismiss');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const email = data.email;

    // validate email
    if (!email || !email.includes('@')) {
        emailInput.classList.add('error');
        emailError.classList.add('error');
        return;
    }

    // open thank you message
    thankYouEmail.textContent = email;
    mainCard.classList.add('thank-you');
    emailInput.classList.remove('error');
    emailError.classList.remove('error');

    // reset form
    form.reset();
});

emailInput.addEventListener('input', () => {
    emailInput.classList.remove('error');
});

dismissButton.addEventListener('click', () => {
    mainCard.classList.remove('thank-you');
});
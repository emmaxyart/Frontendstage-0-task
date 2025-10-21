document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const successMessage = document.querySelector('[data-testid="test-contact-success"]');

    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const showError = (field, message) => {
        const errorElement = document.querySelector(`[data-testid="test-contact-error-${field}"]`);
        errorElement.textContent = message;
        return false;
    };

    const clearErrors = () => {
        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        const name = document.querySelector('[data-testid="test-contact-name"]').value.trim();
        const email = document.querySelector('[data-testid="test-contact-email"]').value.trim();
        const subject = document.querySelector('[data-testid="test-contact-subject"]').value.trim();
        const message = document.querySelector('[data-testid="test-contact-message"]').value.trim();

        let isValid = true;

        if (!name) {
            isValid = showError('name', 'Name is required');
        }

        if (!email) {
            isValid = showError('email', 'Email is required');
        } else if (!validateEmail(email)) {
            isValid = showError('email', 'Please enter a valid email');
        }

        if (!subject) {
            isValid = showError('subject', 'Subject is required');
        }

        if (!message) {
            isValid = showError('message', 'Message is required');
        } else if (message.length < 10) {
            isValid = showError('message', 'Message must be at least 10 characters');
        }

        if (isValid) {
            successMessage.style.display = 'block';
            successMessage.textContent = 'Message sent successfully!';
            form.reset();
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
    });
});
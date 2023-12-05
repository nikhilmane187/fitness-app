// Countdown Timer
function setCountdown() {
    const targetDate = new Date('2023-12-31T18:00:00'); // Example: December 31, 2023, 6:00 PM
    const countdownElement = document.getElementById('timer');

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Fitness class is happening now!';
        }
    }

    updateCountdown(); // Initial call to avoid delay
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Form Validation
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill out all fields in the form.');
        return false;
    }

    // Additional validation logic can be added here

    return true;
}

// Run functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    setCountdown();

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }
});

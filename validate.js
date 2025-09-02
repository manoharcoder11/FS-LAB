document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone');
    const ageInput = document.getElementById('age');
    const dobInput = document.getElementById('dob');
    const countrySelect = document.getElementById('country');
    const websiteInput = document.getElementById('website');


    const showError = (element, message) => {
        const errorSpan = document.getElementById(element.id + 'Error');
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = 'block';
        }
    };

    const hideError = (element) => {
        const errorSpan = document.getElementById(element.id + 'Error');
        if (errorSpan) {
            errorSpan.style.display = 'none';
        }
    };

    const validateForm = (event) => {
        let isValid = true;

        const errorSpans = document.querySelectorAll('.error');
        errorSpans.forEach(span => span.style.display = 'none');

        if (nameInput.value.trim().length < 3) {
            showError(nameInput, 'Name must be at least 3 characters.');
            isValid = false;
        } else {
            hideError(nameInput);
        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        } else {
            hideError(emailInput);
        }

        if (passwordInput.value.trim().length < 8) {
            showError(passwordInput, 'Password must be at least 8 characters.');
            isValid = false;
        } else {
            hideError(passwordInput);
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneInput.value.trim())) {
            showError(phoneInput, 'Please enter a 10-digit phone number.');
            isValid = false;
        } else {
            hideError(phoneInput);
        }


        const age = parseInt(ageInput.value, 10);
        if (isNaN(age) || age < 16 || age > 99) {
            showError(ageInput, 'Age must be between 16 and 99.');
            isValid = false;
        } else {
            hideError(ageInput);
        }


        if (dobInput.value === '') {
            showError(dobInput, 'Please enter your date of birth.');
            isValid = false;
        } else {
            hideError(dobInput);
        }


        const genderRadios = document.querySelectorAll('input[name="gender"]');
        const isGenderSelected = Array.from(genderRadios).some(radio => radio.checked);
        if (!isGenderSelected) {
            showError(genderRadios[0], 'Please select your gender.');
            isValid = false;
        } else {
            hideError(genderRadios[0]);
        }

        if (countrySelect.value === '') {
            showError(countrySelect, 'Please select a country.');
            isValid = false;
        } else {
            hideError(countrySelect);
        }


        if (websiteInput.value.trim() !== '') {
            try {
                new URL(websiteInput.value.trim());
                hideError(websiteInput);
            } catch (_) {
                showError(websiteInput, 'Please enter a valid URL.');
                isValid = false;
            }
        } else {
            hideError(websiteInput);
        }

        if (!isValid) {
            event.preventDefault();
        }
    };

    form.addEventListener('submit', validateForm);
});

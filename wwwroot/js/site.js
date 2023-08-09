

    document.addEventListener("DOMContentLoaded", function() {
        const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const salaryInput = document.getElementById("salaryInput");
    const emailInput = document.getElementById("emailInput");

    nameInput.addEventListener("input", function() {
            const isValid = /^[A-Za-z\s]+$/.test(nameInput.value);
    updateValidation(nameInput, isValid);
        });

    ageInput.addEventListener("input", function() {
            const isValid = /^(\d+|\d+\.\d+)$/.test(ageInput.value);
    updateValidation(ageInput, isValid);
        });

    salaryInput.addEventListener("input", function() {
            const isValid = /^(\d+|\d+\.\d+)$/.test(salaryInput.value);
    updateValidation(salaryInput, isValid);
        });

    emailInput.addEventListener("input", function() {
            const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value);
    updateValidation(emailInput, isValid);
        });

    function updateValidation(inputElement, isValid) {
            if (!isValid) {
        inputElement.setCustomValidity("Invalid input.");
            } else {
        inputElement.setCustomValidity("");
            }
        }
    });


document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const course = document.getElementById('course').value;
    const messageElement = document.getElementById('message');

    if (name === "") {
        isValid = false;
        alert("Please enter your name.");
    }

    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValid = false;
        alert("Please enter a valid email address.");
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        isValid = false;
        alert("Please enter a valid 10-digit phone number.");
    }

    if (course === "") {
        isValid = false;
        alert("Please select a course.");
    }

    if (isValid) {
        messageElement.textContent = "Form submitted successfully!";
        messageElement.style.color = "green";
        document.getElementById('enrollmentForm').reset();
    } else {
        messageElement.textContent = "Form submission failed. Please check the entered details.";
        messageElement.style.color = "red";
    }
});

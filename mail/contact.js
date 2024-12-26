// Initialize EmailJS with your User ID
emailjs.init("BASHHdZY9bscwZBOB");  // Replace with your EmailJS User ID

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Send email via EmailJS
    emailjs.send("service_len61cn", "template_j5vcxel", {
        name: name,
        email: email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        // On success
        console.log('Success!', response);
        document.getElementById("formFeedback").innerHTML = `
            <div class="alert alert-success" role="alert">
                Your message has been sent successfully!
            </div>`;
        document.getElementById("formFeedback").style.display = "block";
        document.getElementById("contactForm").reset();  // Reset form fields
    }, function(error) {
        // On error
        console.log('Failed...', error);
        document.getElementById("formFeedback").innerHTML = `
            <div class="alert alert-danger" role="alert">
                Something went wrong. Please try again later.
            </div>`;
        document.getElementById("formFeedback").style.display = "block";
    });
});

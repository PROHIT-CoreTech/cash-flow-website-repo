// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Core script to initialize global handlers
    console.log('FinFunds core script loaded securely.');

    // Enquiry Form Submission Handler (Email)
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Format the email subject and body
            const subject = encodeURIComponent(`New Website Enquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            // Define the recipient emails
            const recipients = "naresh@cashflowsolutions.in,sushil@cashflowsolutions.in,amish@cashflowsolutions.in";
            
            // Redirect the user to their default email client
            const mailtoUrl = `mailto:${recipients}?subject=${subject}&body=${body}`;
            window.location.href = mailtoUrl;
        });
    }
});

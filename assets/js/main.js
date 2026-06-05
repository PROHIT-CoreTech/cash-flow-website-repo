// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Core script to initialize global handlers
    console.log('FinFunds core script loaded securely.');

    // WhatsApp Form Submission Handler
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Format the WhatsApp message text
            const text = `*New Enquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
            
            // Encode the text for the URL
            const encodedText = encodeURIComponent(text);
            
            // Use the WhatsApp API with the provided number (with country code +91)
            const whatsappUrl = `https://wa.me/919773969033?text=${encodedText}`;
            
            // Redirect the user to WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    }
});

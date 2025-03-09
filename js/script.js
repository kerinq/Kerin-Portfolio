// script.js
// Mobile Menu Toggle
const menuButton = document.querySelector(".hamburg");
const closeButton = document.querySelector(".cancel");
const navbar = document.querySelector(".dropdown");

menuButton.addEventListener("click", () => {
    navbar.style.display = "block";
});

closeButton.addEventListener("click", () => {
    navbar.style.display = "none";
});

// Chatbot
var botui = new BotUI('botui-app');
botui.message.add({
    content: 'Hello! How can I help you today?'
}).then(function() {
    return botui.action.text({
        action: {
            placeholder: 'Type your question here...'
        }
    });
}).then(function(res) {
    botui.message.add({
        content: 'You asked: ' + res.value
    });
});

// QR Code Generator - Hidden but Functional
document.addEventListener("DOMContentLoaded", function() {
    var qrContainer = document.createElement("div"); // Create a temporary container
    document.body.appendChild(qrContainer); // Add it to the page (hidden)

    var qrCode = new QRCode(qrContainer, {
        text: "https://kerinq.github.io/Kerin/", // ✅ Your portfolio link
        width: 150,
        height: 150,
        correctLevel: QRCode.CorrectLevel.H
    });

    setTimeout(() => {
        var qrImage = qrContainer.querySelector("img");
        if (qrImage) {
            console.log("🔗 QR Code Generated:", qrImage.src); // Logs QR image URL
            
            // Make the hidden button visible
            document.getElementById("downloadQR").style.display = "block"; 
            
            // When the button is clicked, download the QR code
            document.getElementById("downloadQR").addEventListener("click", function() {
                var link = document.createElement("a");
                link.href = qrImage.src;
                link.download = "portfolio_qr_code.png"; // Set file name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
        
        document.body.removeChild(qrContainer); // Remove QR div after generating
    }, 500); // Small delay to ensure QR code is generated


});

    
    


// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});
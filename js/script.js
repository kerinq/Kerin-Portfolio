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
    var tempDiv = document.createElement("div"); // Create a hidden div
    document.body.appendChild(tempDiv); // Append it temporarily

    var qrCode = new QRCode(tempDiv, {
        text: "https://kerinq.github.io", // 🔗 Replace with your actual portfolio link
        width: 150,
        height: 150,
        correctLevel: QRCode.CorrectLevel.H // High error correction for better scanning
    });

    setTimeout(() => {
        var qrImage = tempDiv.querySelector("img");
        if (qrImage) {
            console.log("🔗 QR Code Generated:", qrImage.src); // Logs QR image URL in the console
            
            // Auto-download the QR code as an image
            var link = document.createElement("a");
            link.href = qrImage.src;
            link.download = "portfolio_qr_code.png"; // File name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Remove after downloading
        }

        document.body.removeChild(tempDiv); // Clean up the temporary div
    }, 500); // Small delay to ensure the QR code is generated
});

    
    


// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});
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

// QR Code
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://your-portfolio-url.com",
    width: 128,
    height: 128
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});
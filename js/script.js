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
// Chatbox Functionality 
document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById("chatbox-container");
    const toggleChatbox = document.getElementById("chatbox-toggle");
    const closeChat = document.getElementById("close-chat");
    const chatMessages = document.getElementById("chatbox-messages");
    const chatInput = document.getElementById("chatbox-input");
    const sendMessageBtn = document.getElementById("send-message");

    // Show Chatbox when clicking the chat button
    toggleChatbox.addEventListener("click", function() {
        chatbox.classList.add("active");
        toggleChatbox.style.display = "none"; // Hide the chat button
    });

    // Close Chatbox when clicking the close button
    closeChat.addEventListener("click", function() {
        chatbox.classList.remove("active");
        setTimeout(() => {
            toggleChatbox.style.display = "block"; // Show the chat button after closing
        }, 300);
    });

    // Handle Sending Messages
    sendMessageBtn.addEventListener("click", function() {
        let userMessage = chatInput.value.trim();
        if (userMessage !== "") {
            appendMessage("You", userMessage);
            chatInput.value = "";

            // Generate response from chatbot
            setTimeout(() => {
                let botResponse = getBotResponse(userMessage);
                appendMessage("Bot", botResponse);
            }, 1000);
        }
    });

    // Function to Append Messages to Chatbox
    function appendMessage(sender, message) {
        let messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
    }

    // Custom Chatbot Responses Based on Portfolio Content
    function getBotResponse(input) {
        input = input.toLowerCase();

        if (input.includes("hello") || input.includes("hi")) {
            return "Hello! Welcome to my portfolio. What would you like to know?";
        } 
        
        else if (input.includes("who are you") || input.includes("about you")) {
            return "I'm Kerin Quintero, a Computer Technology student at Bowie State University with expertise in web development, network security, and software engineering.";
        }

        else if (input.includes("resume") || input.includes("cv")) {
            return "You can download my resume from the Resume section or click here: <a href='resume improvements final.pdf' target='_blank'>Download Resume</a>";
        }

        else if (input.includes("projects") || input.includes("portfolio")) {
            return "I have worked on several projects. You can view them in the Projects section.";
        } 
        
        else if (input.includes("contact") || input.includes("email")) {
            return "You can reach me through the contact form on my website or via email.";
        }

        else if (input.includes("github")) {
            return "You can check out my GitHub profile here: <a href='https://github.com/kerinq' target='_blank'>GitHub</a>";
        }

        else {
            return "I'm here to help! You can ask about my resume, projects, or contact info.";
        }
    }
});



// QR Code Generator - Hidden but Functional
//document.addEventListener("DOMContentLoaded", function() {
   // var qrContainer = document.createElement("div"); // Create a temporary container
    //document.body.appendChild(qrContainer); // Add it to the page (hidden)

    //var qrCode = new QRCode(document.createElement("div"), {
       // text: "https://kerinq.github.io/Kerin/", // ✅ Your live website link
      //  width: 150,
       // height: 150,
      //  correctLevel: QRCode.CorrectLevel.H
 //   });
    

  //  setTimeout(() => {
      //  var qrImage = qrContainer.querySelector("img");
      //  if (qrImage) {
        //    console.log("🔗 QR Code Generated:", qrImage.src); // Logs QR image URL
            
            // Make the hidden button visible
           // document.getElementById("downloadQR").style.display = "block"; 
            
            // When the button is clicked, download the QR code
          //  document.getElementById("downloadQR").addEventListener("click", function() {
             //   var link = document.createElement("a");
             //   link.href = qrImage.src;
              //  link.download = "portfolio_qr_code.png"; // Set file name
             //   document.body.appendChild(link);
               // link.click();
               // document.body.removeChild(link);
           // });
       // }
        
       // document.body.removeChild(qrContainer); // Remove QR div after generating
   // },// 500); // Small delay to ensure QR code is generated


//});

    


// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});
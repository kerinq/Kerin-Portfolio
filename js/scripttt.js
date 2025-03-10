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
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded and window is ready!");

    const chatbox = document.getElementById("chatbox-container");
    const toggleChatbox = document.getElementById("chatbox-toggle");
    const closeChat = document.getElementById("close-chat");

    if (!chatbox || !toggleChatbox || !closeChat) {
        console.error("ERROR: One or more chatbox elements were not found!");
        return;
    }

    // Hide chatbox initially
    chatbox.style.display = "none";

    // Debugging: Log when attaching event listeners
    console.log("Attaching event listeners...");

    // Open Chatbox
    toggleChatbox.addEventListener("click", function () {
        console.log("Chatbox toggle button clicked!"); // Debugging log
        chatbox.style.display = "flex";
        toggleChatbox.style.display = "none"; // Hide toggle button
    });

    // Close Chatbox
    closeChat.addEventListener("click", function () {
        console.log("Close chat button clicked!"); // Debugging log
        chatbox.style.display = "none";
        toggleChatbox.style.display = "block"; // Show toggle button again
    });

    console.log("Event listeners attached!");
});

// Debugging: Log when attaching event listeners
console.log(" Attaching event listeners...");
// Open Chatbox
toggleChatbox.addEventListener("click", function () {
    console.log("Chatbox toggle button clicked!"); // Debugging log
    chatbox.style.display = "flex";
    toggleChatbox.style.display = "none"; // Hide toggle button
});


    // Handle Sending Messages
    sendMessageBtn.addEventListener("click", function() {
        sendUserMessage();
    });
    
    chatInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendUserMessage();
        }
    });
    
    function sendUserMessage() {
        let userMessage = chatInput.value.trim();
        if (userMessage !== "") {
            appendMessage("You", userMessage);
            chatInput.value = ""; // Clear input
    
            // Generate chatbot response after 1 second
            setTimeout(() => {
                let botResponse = getBotResponse(userMessage);
                appendMessage("Bot", botResponse);
            }, 1000);
        }
    }
    
    // Append Messages to Chatbox
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


// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});

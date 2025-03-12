document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded and window is ready!");

    // Selecting Chatbox Elements
    const chatbox = document.getElementById("chatbox-container");
    const toggleChatbox = document.getElementById("chatbox-toggle");
    const closeChat = document.getElementById("close-chat");
    const sendMessageBtn = document.getElementById("send-message");
    const chatInput = document.getElementById("chatbox-input");
    const chatMessages = document.getElementById("chatbox-messages");

    if (!chatbox || !toggleChatbox || !closeChat || !sendMessageBtn || !chatInput || !chatMessages) {
        console.error("ERROR: One or more chatbox elements were not found!");
        return;
    }

    // Open Chatbox
    toggleChatbox.addEventListener("click", function () {
        chatbox.classList.remove("hidden"); // Use class for consistency
        toggleChatbox.style.display = "none";
    });

    // Close Chatbox
    closeChat.addEventListener("click", function () {
        chatbox.classList.add("hidden");
        toggleChatbox.style.display = "block";
    });

    // Send Message on Button Click
    sendMessageBtn.addEventListener("click", function () {
        sendUserMessage();
    });

    // Send Message on Enter Key
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendUserMessage();
        }
    });

    function sendUserMessage() {
        let userMessage = chatInput.value.trim();
        if (userMessage !== "") {
            appendMessage("You", userMessage);
            chatInput.value = ""; // Clear input

            setTimeout(() => {
                let botResponse = getBotResponse(userMessage);
                appendMessage("Bot", botResponse);
            }, 1000);
        }
    }

    function appendMessage(sender, message) {
        let messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(input) {
        input = input.toLowerCase();

        if (input.includes("hello") || input.includes("hi")) {
            return "Hello! Welcome to my portfolio. What would you like to know?";
        } else if (input.includes("who are you") || input.includes("about you")) {
            return "I'm Kerin Quintero, a Computer Technology student at Bowie State University.";
        } else if (input.includes("resume") || input.includes("cv")) {
            return "You can download my resume from the Resume section.";
        } else if (input.includes("projects") || input.includes("portfolio")) {
            return "You can view my projects in the Projects section.";
        } else if (input.includes("contact") || input.includes("email")) {
            return "Reach me through the contact form on my website.";
        } else {
            return "I'm here to help! Ask about my resume, projects, or contact info.";
        }
    }
});


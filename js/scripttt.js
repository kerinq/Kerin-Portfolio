document.addEventListener("DOMContentLoaded", function () {
    console.log(" JavaScript Loaded!");

    // Select Chatbox Elements
    const chatbox = document.getElementById("chatbox-container");
    const toggleChatbox = document.getElementById("chatbox-toggle");
    const closeChat = document.getElementById("close-chat");
    const sendMessageBtn = document.getElementById("send-message");
    const chatInput = document.getElementById("chatbox-input");
    const chatMessages = document.getElementById("chatbox-messages");

    console.log("Chatbox:", chatbox);
    console.log("Toggle Button:", toggleChatbox);
    console.log("Close Button:", closeChat);

    if (!chatbox || !toggleChatbox || !closeChat || !sendMessageBtn || !chatInput || !chatMessages) {
        console.error(" ERROR: Chatbox elements not found!");
        return;
    }

    console.log(" Chatbox Elements Found!");

    // Ensure button is visible
    toggleChatbox.style.display = "block";  

    // Ensure the chatbox starts hidden
    chatbox.classList.add("hidden");

    // Open Chatbox on Button Click
    toggleChatbox.addEventListener("click", function () {
        console.log(" Chatbox Opened!");
        chatbox.classList.remove("hidden");
        toggleChatbox.style.display = "none";
    });

    // Close Chatbox on Button Click
    closeChat.addEventListener("click", function () {
        console.log(" Chatbox Closed!");
        chatbox.classList.add("hidden");
        toggleChatbox.style.display = "block";  
    });

    console.log(" Event Listeners Attached!");

    // 📌 Message Handling Functionality

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



document.addEventListener('DOMContentLoaded', function() {
    const chatboxContainer = document.getElementById('chatbox-container');
    const chatboxToggle = document.getElementById('chatbox-toggle');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chatbox-messages');
    const chatInput = document.getElementById('chatbox-input');
    const sendButton = document.getElementById('send-message');

    // Toggle chat visibility
    chatboxToggle.addEventListener('click', function() {
        chatboxContainer.classList.toggle('show');
    });

    // Close chat
    closeChat.addEventListener('click', function() {
        chatboxContainer.classList.remove('show');
    });

    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim().toLowerCase();
        if (message) {
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.textContent = chatInput.value.trim();
            chatMessages.appendChild(userMessage);

            // Clear input
            chatInput.value = '';

            // Generate response based on message content
            let response = "";
            if (message.includes('portfolio')) {
                response = "My portfolio showcases my work in web development, network security, and software engineering. Feel free to explore the projects section!";
            } else if (message.includes('resume')) {
                response = "You can download my resume using the 'Download Resume' button on the homepage.";
            } else if (message.includes('contact')) {
                response = "You can reach me through the contact form or connect with me on LinkedIn and GitHub!";
            } else if (message.includes('hi') || message.includes('hello')) {
                response = "Hello! How can I help you today?";
            } else if (message.includes('project')) {
                response = "I have several projects showcasing my skills in web development and software engineering. Check out my GitHub for more details!";
            } else if (message.includes('education') || message.includes('university')) {
                response = "I'm a senior at Bowie State University pursuing a B.S. in Computer Technology with a GPA of 3.2/4.0.";
            } else {
                response = "Thanks for your message! Please ask about my portfolio, projects, education, or how to contact me.";
            }

            // Add bot response
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'message bot-message';
                botMessage.textContent = response;
                chatMessages.appendChild(botMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    // Send button click
    sendButton.addEventListener('click', sendMessage);

    // Enter key press
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
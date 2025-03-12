document.addEventListener('DOMContentLoaded', function() {
    const chatboxContainer = document.getElementById('chatbox-container');
    const chatboxToggle = document.getElementById('chatbox-toggle');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chatbox-messages');
    const chatInput = document.getElementById('chatbox-input');
    const sendButton = document.getElementById('send-message');

    // Toggle chatbox visibility
    chatboxToggle.addEventListener('click', () => {
        chatboxContainer.style.display = 'block';
    });

    closeChat.addEventListener('click', () => {
        chatboxContainer.style.display = 'none';
    });

    // Handle sending messages
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.textContent = message;
            chatMessages.appendChild(userMessage);

            // Clear input
            chatInput.value = '';

            // Simulate bot response (you can modify this part)
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'message bot-message';
                botMessage.textContent = "Thanks for your message! I'll get back to you soon.";
                chatMessages.appendChild(botMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
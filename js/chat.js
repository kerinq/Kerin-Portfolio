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
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.textContent = message;
            chatMessages.appendChild(userMessage);

            // Clear input
            chatInput.value = '';

            // Auto response (you can modify this)
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'message bot-message';
                botMessage.textContent = "Thanks for your message! I'll get back to you soon.";
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
// Add this code in your script.js file for a simple personal assistant chatbot

class Chatbot {
  constructor() {
    this.responses = {
      "how are you": "I'm good, how can I assist you today?",
      "hello": "Hello there! How may I help you?",
      "bye": "Goodbye! Have a great day!",
      // Add more responses here to make your chatbot smarter
    };
    this.defaultResponse = "I'm sorry, I don't understand that. Can you try asking something else?";
  }

  getResponse(message) {
    // The chatbot returns a response based on the user's message
    const cleanedMessage = message.toLowerCase().trim();
    return this.responses[cleanedMessage] || this.defaultResponse;
  }
}

function initializeChatbot() {
  const chatbot = new Chatbot();
  const chatInput = document.getElementById('chat-input');
  const chatButton = document.getElementById('chat-button');
  const chatDisplay = document.getElementById('chat-display');

  chatButton.addEventListener('click', () => {
    const userMessage = chatInput.value;
    const botResponse = chatbot.getResponse(userMessage);
    displayMessage(userMessage, botResponse);
    chatInput.value = ''; // Clear the input after sending the message
  });

  function displayMessage(userMessage, botResponse) {
    const userDiv = document.createElement('div');
    userDiv.textContent = `You: ${userMessage}`;
    chatDisplay.appendChild(userDiv);

    const botDiv = document.createElement('div');
    botDiv.textContent = `Bot: ${botResponse}`;
    chatDisplay.appendChild(botDiv);
  }
}

// Call initializeChatbot function after the DOM has loaded
document.addEventListener('DOMContentLoaded', initializeChatbot);

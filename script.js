function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userInput = inputField.value.trim();
  if (!userInput) return;

  appendMessage("user", userInput);
  inputField.value = "";

  // Simulated bot response
  const botResponse = getBotResponse(userInput);
  setTimeout(() => appendMessage("bot", botResponse), 500);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I assist you today?";
  } else if (input.includes("how are you")) {
    return "I'm just a bunch of code, but I'm doing fine!";
  } else if (input.includes("your name")) {
    return "I'm ChatBot, your virtual assistant!";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else {
    return "I'm sorry, I didn't understand that.";
  }
}

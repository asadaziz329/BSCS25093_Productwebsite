
function greet(){
    alert("Welcome to Palantir.com")
}
greet()


const footer = document.createElement('footer');
    footer.style.backgroundColor = "#f2f2f2";
    footer.style.color = "#333";
    footer.style.textAlign = "center";
    footer.style.padding = "20px";
    footer.style.position = "relative"; // or "fixed" if you want it to always stay at the bottom
    footer.style.bottom = "0";
    footer.style.width = "100%";
      document.body.appendChild(footer);

      function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (message === "") return;

  appendMessage("user", message);
  input.value = "";

  // Bot response
  setTimeout(() => {
    const response = getBotResponse(message);
    appendMessage("bot", response);
  }, 500);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chatBox");
  const messageDiv = document.createElement("div");
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const lower = input.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (lower.includes("help")) {
    return "Sure! You can ask me about services, contact info, or general questions.";
  } else if (lower.includes("bye")) {
    return "Goodbye! Have a great day!";
  } else if (lower.includes("name")) {
    return "I'm a simple web chatbot built with JavaScript!";
  } else {
    return "Sorry, I didn't understand that. Try asking something else.";
  }
}

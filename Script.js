function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  const userText = input.value;
  chat.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  let botReply = "I am a chatbot 🤖";
  chat.innerHTML += `<p><b>Bot:</b> ${botReply}</p>`;

  input.value = "";
}

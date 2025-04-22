const socket = io();
const params = new URLSearchParams(window.location.search);
const division = params.get("division");
const username = localStorage.getItem("username");
document.getElementById("division-title").innerText = `Division ${division}`;

const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.onclick = () => {
  const message = messageInput.value;
  if (message) {
    socket.emit("chat-message", { username, message, division });
    messageInput.value = "";
  }
};

socket.on("chat-message", (data) => {
  const div = document.createElement("div");
  div.innerText = `[${data.time}] ${data.username}: ${data.message}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});

function markAttendance() {
  alert("Attendance marked! (Feature coming soon)");
}

function createPoll() {
  alert("Poll created! (Feature coming soon)");
}

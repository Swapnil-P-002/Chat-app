async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
  
    const data = await res.json();
    document.getElementById("message").innerText = data.message;
  
    if (data.success) {
      localStorage.setItem("username", username);
      window.location.href = "divisions.html";
    }
  }
  
  async function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
  
    const data = await res.json();
    document.getElementById("message").innerText = data.message;
  }
  
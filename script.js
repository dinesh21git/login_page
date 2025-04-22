function register() {
    const name = document.getElementById("regName").value;
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
  
    if (name && username && password) {
      const user = { name, username, password };
      localStorage.setItem("userData", JSON.stringify(user));
      alert("Registereed successfully!");
      window.location.href = "login.html";
    } else {
      alert("Please fill all fields");
    }
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    const savedUser = JSON.parse(localStorage.getItem("userData"));
  
    if (savedUser && savedUser.username === username && savedUser.password === password) {
      localStorage.setItem("currentUser", savedUser.name);
      window.location.href = "welcome.html";
    } else {
      document.getElementById("errorMsg").innerText = "Try Again, Incorrect crednetials.";
    }
  }
  
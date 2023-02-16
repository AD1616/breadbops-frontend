<div id="loginForm" class="login-container">
  <div class="input-field">
    <input autocomplete="off" id="inputEmail" type="email" required>
    <label>Email</label>
  </div>
  <div class="input-field">
    <input autocomplete="off" id="inputPassword" type="password" required>
    <label>Password</label>
  </div>
  <button class="button1" type="submit" onclick="login()">Login</button>
</div> 

<button id="logoutButton" class="button1" onclick="logout()">Logout</button>




<style>

* {
  box-sizing: border-box;
}

.login-container {
  max-width: 480px;
  margin: 50px auto;
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}

h2 {
  margin: 0;
  padding: 0 0 30px;
  text-align: center;
  font-size: 40px;
  color: #333;
}

.input-field {
  position: relative;
  margin: 30px 0;
}

.input-field input {
  width: 100%;
  padding: 20px 0;
  border: none;
  border-bottom: 2px solid #999;
  outline: none;
  font-size: 24px;
}

.input-field label {
  position: absolute;
  top: 20px;
  left: 0;
  font-size: 24px;
  color: #999;
  pointer-events: none;
  transition: all 0.5s ease;
}

.input-field input:focus + label, .input-field input:valid + label {
  top: -25px;
  left: 0;
  font-size: 20px;
  color: #ad1616;
}

.button {
  background-color: #ad1616;
  color: white;
  text-align: center;
  transition-duration: 1s;
  cursor: pointer;
}



</style>


<script>

const username = sessionStorage.getItem("username");
const email = sessionStorage.getItem("email");

if (email == null || email == "" || username == "Guest") {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("logoutButton").style.display = "none";
}

else {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("logoutButton").style.display = "block";
}

function login() {
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  const url = "https://breadbops.gq/authenticate";
  const getNameUrl = "https://breadbops.gq/api/person/getPersonName"
  
  const options = {
    method: 'POST', 
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "email" : email,
        "password" : password
    })
  };




  // fetch(url, options)
  //   .then(response => console.log(response.text()))
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));


  // Fetch JWT
  fetch(url, options)
  .then(response => {
      // trap error response from Web API
      if (!response.ok) {
          const errorMsg = 'Login error: ' + response.status;
          console.log(errorMsg);
          return; 
      }
      // Success!!!
      // Redirect to Database location

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("https://breadbops.gq/api/person/getPersonName?email=" + email, requestOptions)
        .then(response => response.text())
        .then(text => {
          console.log(text);
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("username", text);
          window.location.href = "{{site.baseurl}}/";
        })
        .catch(error => console.log('error', error));
      



  })





  
}

function logout() {
  document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  sessionStorage.setItem("username", "Guest");
  sessionStorage.setItem("email", null);
  sessionStorage.setItem("token", null);
  window.location.reload();

}




if (sessionStorage.getItem("username") == null) {
  sessionStorage.setItem("username", "Guest");
}


document.getElementById("user").innerHTML = "Hello " + sessionStorage.getItem("username") + "!";



</script>
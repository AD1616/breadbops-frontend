<h1 id="user"> </h1>

<label for="inputEmail">Email</label>
<input id="inputEmail" type="text" name="inputEmail" autocomplete="off" />

 
<label for="inputPassword">Password</label>
<input id="inputPassword" type="password" name="inputPassword" />

<button class="button1" onclick="login()">Login</button>

<button class="button1" onclick="logout()">Logout</button>


<script>

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
          window.location.href = "{{site.baseurl}}/addtoinventory";
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

<style>
#input {
    text-shadow: 0 1px 1px hsl(0 0% 0% / 20%);
}


a:focus,
a:hover {
  text-decoration-color: black;
}

input {
  font-size: 2em;
  padding: 0.2em 0.5em;
}   

label {
    font-size: 3em;
}

.button {
  background-color: #ad1616;
  color: white;
  text-align: center;
  transition-duration: 1s;
  cursor: pointer;
}

.button1 {
  background: transparent;
  border: none;
  border-radius: 12px;
  color: #ad1616; 
  font-size: 5em;
}

.button1:hover {
  transition-duration: 1s;
  background-color: #ad1616;
  color: white;
}

</style>
<!-- <div>

<h1 id="name"> </h1>
<h1 id="email"> </h1>
<h1 id="roles"> </h1>

</div> -->



<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>

<h2 id="title" style="text-align:center">User Profile Card</h2>

<div class="card">
  <h1 id="name"></h1>
  <p class="title" id="roles" ></p>
  <p id="email"></p>
</div>

</body>
</html>

<script>

const name = sessionStorage.getItem("username");
const email = sessionStorage.getItem("email");
var roles = "";


const options = {
    method: 'GET', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'include', 
    headers: {
        'Content-Type': 'application/json'
        
    },
};

const getRolesURL = "https://breadbops.gq/api/person/getPersonRoles?email=";

if (name != "Guest") {
    fetch(getRolesURL + email, options)
    .then(response => response.json())
    .then(data => {
        for (const item of data) {
            console.log(item["name"]);
            if (item["name"] == "ROLE_ADMIN") {
                roles += "ROLE_ADMIN";
            }

            else if (item["name"] == "ROLE_DEALERSHIP") {
                roles += "ROLE_DEALERSHIP";
            }

            else if (item["name"] == "ROLE_USER") {
                roles += "ROLE_USER";
            }
        
        document.getElementById("name").innerHTML = "" + name;
        document.getElementById("email").innerHTML = "Contact via: " + email;
        document.getElementById("roles").innerHTML = "" + roles;


        }

    })
    .catch(error => console.error(error));
}

else {
    document.getElementById("title").innerHTML = "You are logged in as a Guest. Sign up and login to view your profile!";
    document.getElementById("name").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("roles").innerHTML = "";
}




</script>   


<style>

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

</style>
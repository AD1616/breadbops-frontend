<div>

<h1 id="name"> </h1>
<h1 id="email"> </h1>
<h1 id="roles"> </h1>

</div>

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
        
        document.getElementById("name").innerHTML = "Name: " + name;
        document.getElementById("email").innerHTML = "Email: " + email;
        document.getElementById("roles").innerHTML = "Role: " + roles;


        }

    })
    .catch(error => console.error(error));
}

else {
    document.getElementById("name").innerHTML = "You are logged in as a Guest. Sign up and login to view your profile!";
    document.getElementById("email").innerHTML = "";
    document.getElementById("roles").innerHTML = "";
}




</script>   
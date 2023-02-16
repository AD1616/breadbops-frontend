# Car Specs

<style>
input[type=text] {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 10px;
  transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
  width: 50%;
}
.button {
  background-color: #AD1616;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;   
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>


<script>

let table = document.getElementById("idk");

function getYear(){
    let inputYear = document.getElementById("inputYear").value;
    return inputYear;
}
function getBrand(){
    let inputBrand = document.getElementById("inputBrand").value;
    return inputBrand;
}


function getSpec() {
     const options = {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'include', 
      headers: {
          'Content-Type': 'application/json'
          
      },
  };
    result = document.getElementById("getSpecResult");
    // console.log(yearparam);
    // console.log(brandparam);
    // Fetch data from API
    fetch('https://breadbops.gq/api/specs/makes', options)
    .then(response => response.json())
    .then(data => console.log(data))
    //  {

// const table = document.getElementById('idk');
//         while (table.rows.length > 1) {
//           table.deleteRow(-1);
//         }
//         console.log(data);
//         for (const car of data.Results) {
//           const row = table.insertRow(-1);
//           row.insertCell(-1).innerHTML = car.name;
//           row.insertCell(-1).innerHTML = car.id;
//         }

//         result.innerHTML =  yearparam + brandparam + data.Results;

//     })
}




</script>
### Car Models for Specific Year
<a href="{{site.baseurl}}/spec">reset</a>

<body> 

<input type="text" name="search" id="inputBrand" placeholder="Brand">
<input type="text" name="search" id="inputYear" placeholder="Year">
<button class="button" id= "button" onclick="getSpec()">Go</button>
<table id="idk"></table>

</body>

<!-- makes sure you can press enter to submit the form -->
<script>
  var input = document.getElementById("inputYear");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});
</script>
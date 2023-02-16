# Car Models

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

let table = document.getElemenetById("idk");

function getYear(){
    let inputYear = document.getElementById("inputYear").value;
    return inputYear;
}
function getBrand(){
    let inputBrand = document.getElementById("inputBrand").value;
    return inputBrand;
}


function isLeapYear(brandparam, yearparam) {
    
    result = document.getElementById("isLeapYearResult");
    console.log(yearparam);
    console.log(brandparam);
    // Fetch data from API
    fetch('https://breadbops.gq/api/calendar/fetchCars/' + brandparam + "/" + yearparam)
    .then(response => response.json())
    .then(data => {

const table = document.getElementById('idk');
        while (table.rows.length > 1) {
          table.deleteRow(-1);
        }
        console.log(data);
        for (const car of data.Results) {
          const row = table.insertRow(-1);
          row.insertCell(-1).innerHTML = car.Make_ID;
          row.insertCell(-1).innerHTML = car.Model_ID;
          row.insertCell(-1).innerHTML = car.Make_Name;
          row.insertCell(-1).innerHTML = car.Model_Name;
        }

        result.innerHTML =  yearparam + brandparam + data.Results;

    })
    .catch(console.log("error"))
}




</script>
### Car Models for Specific Year
<a href="{{site.baseurl}}/models">reset</a>

<body> 

<input type="text" name="search" id="inputBrand" placeholder="Brand">
<input type="text" name="search" id="inputYear" placeholder="Year">
<button class="button" id= "button" onclick="isLeapYear(getBrand(), getYear())">Go</button>
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
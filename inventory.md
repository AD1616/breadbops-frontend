
<style>
.center {
  margin-left: auto;
  margin-right: auto;
}

#inventory tr:hover {background-color: #ddd;}
/* #inventory tr:nth-child(even){background-color: #303030;} */
#inventory tr:nth-child(odd){background-color: #aaa;}

</style>

<table id="inventory" class="center">
  <tr>
    <th>Make</th>
    <th>Model</th>
    <th>Year</th>
    <th>Price</th>
    <th>Action</th>
  </tr>

  <tr>
    <td>Toyota</td>
    <td>Camry</td>
    <td>2020</td>
    <td>$25,000</td>
  </tr>
  <tr>
    <td>Honda</td>
    <td>Accord</td>
    <td>2019</td>
    <td>$22,000</td>
  </tr>
  <tr>
    <td>Ford</td>
    <td>Mustang</td>
    <td>2018</td>
    <td>$35,000</td>
  </tr>

  <tr>
    <td><input type="text" id="make"></td>
    <td><input type="text" id="model"></td>
    <td><input type="text" id="year"></td>
    <td><input type="text" id="price"></td>
    <td><button onclick="addCar()">Add Car</button></td>
  </tr>
</table>

<script>
function addCar() {
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  var year = document.getElementById("year").value;
  var price = document.getElementById("price").value;
  
  var table = document.getElementsByTagName("table")[0];
  var newRow = table.insertRow();
  var makeCell = newRow.insertCell();
  var modelCell = newRow.insertCell();
  var yearCell = newRow.insertCell();
  var priceCell = newRow.insertCell();
  
  makeCell.innerHTML = make;
  modelCell.innerHTML = model;
  yearCell.innerHTML = year;
  priceCell.innerHTML = price;
}
</script>
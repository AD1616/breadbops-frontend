
<style>
#inventory tr:hover {background-color: #ddd;}
#inventory tr:nth-child(odd){background-color: #aaa;}

</style>

<table id="inventory" class="center" style="width:100%">
  <!-- <tr>
    <th>Make</th>
    <th>Model</th>
    <th>Year</th>
    <th>Price</th>
    <th>Image</th>
    <th>Add Car</th>
    <th>Delete Car</th>
    <th>Edit Car</th>
  </tr> -->
  <tbody>
  <tr th:each="car : ${list}">
      <td th:text="${car.id}">Car ID</td>
      <td th:text="${car.make}">Make</td>
      <td th:text="${car.model}">Model</td>
      <td th:text="${car.year}">Year</td>
      <td th:text="${car.price}">Price</td>
          <a th:href="@{/database/carupdate/{id}(id = ${car.id})}">Update</a>
          <a th:href="@{/database/cardelete/{id}(id = ${car.id})}">Delete</a>
      </td>
  </tr>
  </tbody>

  <tr>
    <td><input type="text" id="make"></td>
    <td><input type="text" id="model"></td>
    <td><input type="text" id="year"></td>
    <td><input type="text" id="price"></td>
    <td><button onclick="editCar()">Upload Image</button></td>
    <td><button onclick="addCar()">Add Car</button></td>
    <td><button onclick="deleteCar()">Delete Car</button></td>
    <td><button onclick="editCar()">Edit Car</button></td>
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
function deleteCar() {}
function editCar() {}
</script>

<!-- https://learn.shayhowe.com/html-css/organizing-data-with-tables/ -->
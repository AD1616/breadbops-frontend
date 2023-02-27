<table class="styled-table">
<!-- Input fields and columns -->
    <thead class="table-dark">
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Stars</th>
        <th scope="col">Comments</th>
        </tr>
    </thead>
    <tbody id="table_body">
    </tbody>
</table>


<script>

// Headers and cookies
var myHeaders = new Headers();
myHeaders.append("Cookie", "JSESSIONID=50444A2204FEABB3D34244D4E48F50B7");

// Get method
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// Fetching from backend
fetch("https://breadbops.gq/api/reviewInventory/all").then((data)=>{
    console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].name);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.email}</td>
        <td>${values.phone}</td>
        <td>${values.stars}</td>
        <td>${values.comments}</td>
        <td><a href=https://breadbops.gq/api/reviewInventory/delete/${values.id} class="btn btn-danger btn-sm">Delete</a></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})


</script>

<style>
    
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    max-width:1200px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: auto;
    margin-right: auto;
}

.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
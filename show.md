<table class="table table-bordered">
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

var myHeaders = new Headers();
myHeaders.append("Cookie", "JSESSIONID=50444A2204FEABB3D34244D4E48F50B7");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

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
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})


</script>
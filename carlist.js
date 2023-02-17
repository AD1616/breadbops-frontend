var myHeaders = new Headers();
myHeaders.append("Cookie", "JSESSIONID=50444A2204FEABB3D34244D4E48F50B7");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// fetching the data in json format
// converting to object format: json -> objectData
// recursively mapping data
// table data mapping the values
fetch("https://breadbops.gq/api/carInventory/all").then((data)=>{
    console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].name);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.make}</td>
        <td>${values.model}</td>
        <td>${values.year}</td>
        <td>${values.description}</td>
        <td><a href=https://breadbops.gq/api/carInventory/delete/${values.id} class="btn btn-danger btn-sm">Delete</a></td>
        <td><a href=https://ad1616.github.io/breadbops-frontend/carupdate?carid=${values.id} class="btn btn-primary btn-sm">Update</a></td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})

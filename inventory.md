<head>
<style>
  img{
    width:100px;
    }
</style>
</head>
<body>
        <h1 class="text-center">Car Inventory</h1>
        <div class="container">

        
        <table class="table table-bordered">
            <thead class="table-dark">
              <tr>
                <th scope="row">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Make</th>
                <th scope="col">Model</th>
                <th scope="col">Year</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th>
                <button class="btn btn-danger btn-sm">Delete</button></th>
                <th>
                <button class="btn btn-primary btn-sm">Update</button></th>
              </tr>
            </thead>
            <tbody id="table_body">
              
            </tbody>
          </table>
        </div>
        <script src="carlist.js"></script>
    </body>

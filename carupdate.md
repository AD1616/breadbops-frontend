<head>
<style>
  img{
    width:100px;
    }
</style>

</head>
<body">
<h1 class="heading">Update Car</h1>
  <div id="inputs">
    <label for="inputCarName">Name</label>
    <input id="inputCarName" type="text" name="inputCarName"/><br>

    <label for="inputMake">Make</label>
    <input id="inputMake" type="text" name="inputMake" autocomplete="off" /><br>

    <label for="inputModel">Model</label>
    <input id="inputModel" type="text" name="inputModel" autocomplete="off" /><br>

    <label for="inputYear">Year</label>
    <input id="inputYear" type="number" name="inputYear" autocomplete="off" /><br>

    <label for="inputCarDescription">Description</label>
    <textarea id="inputCarDescription" name="inputCarDescription" rows="4" cols="50">
    Enter description here...
    </textarea><br>

    <p><label for="img">Upload Image</label>
    <input id="inputCarImage" type="file" id="img" name="inputCarImage" accept="image/*"></p><br>
    


    <button class="button1" onclick="input()">Upload Car</button>
    </div>
  </div>
  <script src="carupdate.js"></script>
</body>


<style>
#input {
    text-shadow: 0 1px 1px hsl(0 0% 0% / 20%);
}


a:focus,
a:hover {
  text-decoration-color: black;
}

input {
  font-size: 2em;
  padding: 0.2em 0.5em;
}   

label {
    font-size: 3em;
}
.heading{
  text-align: center;
  font-size: 3rem;
}

.button {
  background-color: #ad1616;
  color: white;
  text-align: center;
  transition-duration: 1s;
  cursor: pointer;
}

.button1 {
  background: transparent;
  border: none;
  border-radius: 12px;
  color: #ad1616; 
  font-size: 5em;
}

.button1:hover {
  transition-duration: 1s;
  background-color: #ad1616;
  color: white;
}
</style>

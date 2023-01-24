

<label for="inputCarName">Input Car Name</label>
<input id="inputCarName" type="text" name="inputCarName" autocomplete="off" />


<label for="img">Upload Image</label>
<input id="inputCarImage" type="file" id="img" name="inputCarImage" accept="image/*">
 
<label for="inputCarDescription">Enter a Description of the Car</label>
<textarea id="inputCarDescription" name="inputCarDescription" rows="4" cols="50">
Enter description here...
</textarea>

<button class="button1" onclick="input()">Upload Car</button>

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
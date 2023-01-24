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
</style>

<label for="inputCarName">Input Car Name</label>
<input type="text" name="inputCarName" autocomplete="off" />


<label for="img">Upload Image</label>
<input type="file" id="img" name="img" accept="image/*">
 
<label for="carDescription">Enter a Description of the Car</label>
<textarea id="carDescription" name="carDescription" rows="4" cols="50">
Enter description here...
</textarea>
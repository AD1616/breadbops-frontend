<!-- # inventory

# color to use: #6b7f94

<!DOCTYPE html>
<html>
<style>
table, th, td {
  border:1px solid black;
}
</style>
<body> -->

<table class="tftable" border="1">

  <tr bgcolor="yellow">
<td>User Name List</td><td> Status </td> <td>Used By</td>
 </tr>
  <tr>
 <td>User1 </td><td bgcolor="green"> </td><table><tbody><tr><td>Available</td></tr></tbody></table>
  </tr>

 <tr>
 <td>User2 </td><td bgcolor="green"> </td><table><tbody><tr><td>Available</td></tr></tbody></table>
 </tr>

 <tr>
 <td>User3 </td><td bgcolor="red"> </td><td>Troy</td>
 </tr>

 <tr>
 <td>User4 </td><td bgcolor="green"> </td><table><tbody><tr><td>Available</td></tr></tbody></table>
 </tr>

 <tr>
 <td>User5</td><td bgcolor="red"> </td><td>John</td>
 </tr>

 <tr>
 <td>User6<td bgcolor="green"> </td><table><tbody><tr><td>Available</td></tr></tbody></table>
 </td></tr>

 <tr>
 <td>User7 </td><td bgcolor="red"> </td><table><tbody><tr><td>Available</td></tr></tbody></table>
 </tr>

 <br>
 </br></table>
 <form>
 <select name="userlist">
 <option value="User1">User1</option>
 <option value="User2">User2</option>
 <option value="User3">User3</option>
 <option value="User4">User4</option>
 <option value="User5">User5</option>
 <option value="User6">User6</option>
 <option value="User7">User7</option>
 </select>
 <br>
 <form method="post">
 <textarea cols="20" rows="1">Type your name here</textarea>
 <br>
 <input type="button" value="Grab">
 <input type="reset" value="Reset" >
 </form>

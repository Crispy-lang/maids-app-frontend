import React from 'react';
import '../../../css/style.css';


function Body() {
  return (
    <section id="section-1">
      <div className="signup">
        <center>
          <table >
            <tr>
              <td colSpan="2"><center><h3>Register</h3></center></td>
            </tr>
            <tr>
              <td>Full name</td>
              <td><input type="text" name="" /></td>
            </tr>
            <tr>
              <td>Username</td>
              <td><input type="text" name="" /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="text" name="" /></td>
            </tr>
            <tr>
              <td>Address</td>
              <td><input type="text" name="" /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="Password" name="" /></td>
            </tr>
            <tr>
              <td colSpan="2"><input type="submit" name="sub" value="Register" /></td>
            </tr>
          </table>
        </center>
      </div>
    </section>
  );
}

export default Body;

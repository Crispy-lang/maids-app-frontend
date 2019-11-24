import React from 'react';

function Body(params) {
  return (
    <section id="section-1-1">
      <div className="signin">
        <center>
          <table>
            <tr>
              <td colSpan="2"><center><h3>Login</h3></center></td>
            </tr>
            <tr>
              <td>Username</td>
              <td><input type="text" name="" /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="Password" name="" /></td>
            </tr>
            <tr>
              <td colSpan="2"><input type="submit" name="sub" value="login" /></td>
            </tr>
            <tr>
              <td colSpan="2" >Forgot password <a href="#">Reset</a></td>
            </tr>
          </table>
        </center>
      </div>
    </section>
  );
}

export default Body;

import React from 'react';
import '../../../css/index.css';

function Header () {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1><span className="highlight">Auto</span> Mart</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/signin">Sign Up</a></li>
            <li><a href="/signup" >Sign In</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import '../../../css/style.css';

function Header () {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1><span className="highlight">Auto</span> Mart</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/index" >Home</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

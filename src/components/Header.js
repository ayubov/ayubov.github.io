import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          ayubov
        </div>

        <nav>
          <ul>
            <li className="first">
              <Link className="links" to="/">Home</Link>
            </li>
            <li>
              <Link className="links" to="/works">Works</Link>
            </li>
            <li className="last">
            <Link className="links" to="/contact">Contact</Link>
            </li>
          </ul>  
        </nav>
      <hr />
      </header>
    );
  }
}

export default Header;

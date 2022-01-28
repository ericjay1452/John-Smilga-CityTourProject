import React, { Component } from 'react';
import logo from '../../logo.svg';
import "./navbar.scss";

 class Navbar extends Component {
  render() {
    return <>
      <header className='header'>
          <nav className="nav">
              <a href="/">
              <img src={logo} alt=""  className='logo'/>
              </a>

              <ul className="list">
                  <li>
                      <a href="/" className="list-link">Home</a>
                  </li>

                  <li>
                      <a href="/" className="list-link">Gallery</a>
                  </li>

                  <li>
                      <a href="/" className="list-link">Tour</a>
                  </li>

                  <li>
                      <a href="/" className="list-link">About</a>
                  </li>

                  <li>
                      <a href="/" className="list-link">Contact</a>
                  </li>
              </ul>
          </nav>
      </header>
    </>
  }
}

export default Navbar
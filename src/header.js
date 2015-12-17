import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header className="portfolio-header row-stack">
        <h1 className="portfolio-title">{this.props.title}</h1>
        <nav className="portfolio-nav">
          <ul className="portfolio-menu">
            <li className="active"><a href="#">GALLERY</a></li>
            <li>BLOG</li>
            <li><Link to="/about">ABOUT</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}


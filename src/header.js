import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="portfolio-header row-stack">
        <h1 className="portfolio-title">{this.props.title}</h1>
        <nav className="portfolio-nav">
          <ul className="portfolio-menu">
            <li className="active"><a href="#">GALLERY</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">ABOUT</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}
import React, { Component } from 'react';

export default class GalleryItem extends Component {
  render() {
    return (
      <li className="gallery-item">
        <a href="#">
          <img src={this.props.url} className="gallery-item-img"/>
        </a>
        <span className="gallery-item-desc">{this.props.desc}</span>
      </li>
    );
  }
}

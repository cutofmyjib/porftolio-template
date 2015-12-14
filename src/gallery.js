import React, { Component } from 'react';
import GalleryItem from './gallery-item';

export default class Gallery extends Component {
  render() {
    // render list items dynamically
    //https://facebook.github.io/react/docs/tutorial.html
    var galleryItems = this.props.img.map(function(data){
      return <GalleryItem {...data} />
    });

    return (
      <section className="gallery">
        <ul className="gallery-items">
          {galleryItems}
        </ul>
      </section>
    );
  }
}
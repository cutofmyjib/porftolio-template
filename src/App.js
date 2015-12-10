import React, { Component } from 'react';

class Header extends Component {
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

class Gallery extends Component {
  render() {
    const galleryItems = this.props.galleryImgUrls.map(function(url){
      return <GalleryItem src={url} />
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

class GalleryItem extends Component {
  render() {
    return (
      <li className="gallery-item">
        <a href="#">
          <img src={this.props.src} className="gallery-item-img"/>
        </a>
        <span className="gallery-item-desc">desc</span>
      </li>
    );
  }
}



export class App extends Component {
  render() {
    var headerOptions = {
      title: "MY PORTFOLIO"
    };

    var galleryOptions = {
      galleryImgUrls: ["/static/dancing_drakes.jpg"]
    };

    return (
      <div>
        <Header {...headerOptions} />
        <Gallery {...galleryOptions} />
      </div>
    );
  }
}
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
    const galleryItems = this.props.url.map(function(url){
      return <GalleryItem {...url} />
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
      <Header {...headerOptions}/>
      <Gallery {...galleryOptions} />
    );
  }
}
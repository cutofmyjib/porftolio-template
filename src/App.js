import React, { Component } from 'react';
import Header from './header';


class Gallery extends Component {
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

class GalleryItem extends Component {
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

class Footer extends Component {
  render(){
    return (
      <footer>
        <ul className="footer-menu">
          <li className="linkedin"><a href="#"></a></li>
          <li className="twitter"><a href="#"></a></li>
          <li className="email"><a href="#"></a></li>
        </ul>
      </footer>
    );
  }
}

export class App extends Component {
  render() {
    var headerOptions = {
      title: "MY PORTFOLIO"
    };

    var galleryOptions = {
      img: [
        { url: "/static/dancing_drakes.jpg", desc: "description 1" },
        { url: "/static/floral_tea_cups.gif", desc: "description 2" },
        { url: "/static/hipster_floral_triangles.jpg", desc: "description 3" },
        { url: "/static/pusheen_the_cats.png", desc: "description 4" }
      ]
    };

    return (
      <div>
        <Header {...headerOptions} />
        <Gallery {...galleryOptions} />
        <Footer />
      </div>
    );
  }
}
import React, { Component } from 'react';

import Header from './header';
import Gallery from './gallery';
import Footer from './footer';

export default class Home extends Component {
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

    return(
      <div>
        <Header {...headerOptions} />
        <Gallery {...galleryOptions} />
        <Footer />
      </div>
    );
  }
}
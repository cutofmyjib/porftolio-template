import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './header';
import Gallery from './gallery';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

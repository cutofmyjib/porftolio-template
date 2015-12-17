import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router';
import routes from './routes';

import '../static/style.css';
import '../static/ClearSans-Regular.ttf';
import '../static/LeagueSpartan-Bold.otf';
import '../static/menu.png';
import '../static/dancing_drakes.jpg';
import '../static/pusheen_the_cats.png';
import '../static/hipster_floral_triangles.jpg';
import '../static/floral_tea_cups.gif';
import '../static/linkedin.png';
import '../static/twitter.png';
import '../static/email.png';

render(routes, document.getElementById('main'));


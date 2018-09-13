
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom';
import './index.css';
class Nav extends React.Component {//es6
    render() {
      return (
        <div>
            <ul>
                <li><NavLink exact activeClassName='active' to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
            </ul>
        </div>
      );
    }
}

export default Nav;


import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Prompt,
    Link
  } from 'react-router-dom';
import Nav from '../components/nav/Nav.js';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import 'rc-texty/assets/index.css';

class Home extends React.Component {//es6
        state = {
        show: true
      };
      onClick = () => {
        this.setState({
          show: !this.state.show
        });
      }
      render(){
        return (
          <div className="texty-demo" style={{ marginTop: 16 }}>
            <p className="buttons" style={{ marginBottom: 16 }}>
              <div type="primary" onClick={this.onClick}>切换</div>
            </p>
            <Texty>{this.state.show && 'Ant Motion'}</Texty>
          </div>
        );
      }
}

export default Home;

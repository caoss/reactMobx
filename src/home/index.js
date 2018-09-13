
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
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

// class TaskStore {
//     @observable.shallow tasks = ['0','1','2'];
//     @action addTask(task) { 
//         this.tasks.add(task);
//     }
// }

var appState = observable({
    tasks: ['0','1','2']
});

// @observer
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
        // let taskStore = new TaskStore();
        return (
            <div className="texty-demo" style={{ marginTop: 16 }}>
                <p className="buttons" style={{ marginBottom: 16 }}>
                    <div type="primary" onClick={this.onClick}>切换</div>
                </p>
                <Texty>{this.state.show && 'Ant Motion'}</Texty>
                {
                    appState.tasks&&appState.tasks.length>0?
                    appState.tasks.map(function(item){
                        return(
                            <p>{item}</p>
                        )
                    })
                    :
                    ''
                }

            </div>
        );
    }
}

export default Home;

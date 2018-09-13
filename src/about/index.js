
import React from 'react';
import Nav from '../components/nav/Nav.js';

// class About extends React.Component {//es6
//     render() {
//       return(
//         <div>
//             <Nav />
//             <h1>About</h1>
//         </div>
//       )
//     }
// }

// export default About;


// class Title extends React.Component {
//     constructor(props) {
//       super(props)
//     }
//     render() {
//       console.log('title render')
//       return (
//         <div>{this.props.title}</div>
//       )
//     }
// }


// class Title extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state={
//           'form':1,
//       }
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log(nextProps, nextState);
//       if (nextProps.title != this.props.title) {
//         return true     //只有title变化时才更新
//       } else {
//         return false
//       }
//     }
//     render() {
//       console.log('title render')
//       return (
//         <div>{this.props.title}</div>
//       )
//     }
// }
class Title extends React.PureComponent {
    constructor(props) {
      super(props)
    }
    render() {
      console.log('title render')
      return (
        <div>{this.props.title}</div>
      )
    }
  }
  
   
//   class PureCom extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         title: 'pure',
//         num: 0,
//       }
//       this.add = this.add.bind(this);
//     }
//     add() {
//       let { num } = this.state;
//       num++;
//       this.setState({ num,title:'123123131321' })
//     }
//     render() {
//       console.log('pure render')
//       return (
//         <div>
//           <Title title={this.state.title} />
//           <p>{this.state.num}</p>
//           <button onClick={this.add}>add</button>
//         </div>
//       )
//     }
//   }

class PureCom extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        items: [1, 2, 3],
        title: 'pure',
      }
      this.add = this.add.bind(this);
    }
    add() {
      let { items } = this.state;
      items.push(23);
      this.setState({ items })
    }
    render() {
      console.log('pure render')
      return (
        <div>
          <Title title={this.state.title} />
          <ul>
            {this.state.items.map((e, i) => {
              return <li key={i}>{e}</li>
            })}
          </ul>
          <button onClick={this.add}>add</button>
        </div>
      )
    }
  }
  
export default PureCom;


  

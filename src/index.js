import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props) { //props as properties defined by rendering types
  return <h1>Hello, {props.name} on {props.show}</h1>
}


//es6 Component
// class Cartoon extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

function Show() {
    return <div>
            <Cartoon name='Pikachu' show='Pokemon'/>
            <Cartoon name='Jasmine' show='Alladin'/>
           </div>
}
  ReactDOM.render(
    <Show />,
    document.getElementById('root')
  );

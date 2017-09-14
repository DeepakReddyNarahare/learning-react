import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component{

  constructor(props){
    super(props);
    //how to use the state
    this.state = {
      date: new Date()
    }
  }

//life cycle of the components
  componentDidMount(){//when loads
    this.timer = setInterval(() =>this.start(),1000);
  }

  componentWillUnmount(){//remove from dom
    clearInterval(this.timer);
  }

  start(){
    //update the state
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <h1>Time is: {this.state.date.toLocaleTimeString()}</h1>
  }
}

    ReactDOM.render(
      <Clock />,
      document.getElementById('root')
    );

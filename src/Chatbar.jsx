import React, {Component} from 'react';


class Chatbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentUser: this.props.currentUser,
        value: ""
      }
      this.postMessage = this.postMessage.bind(this)
    }

    postMessage(event) { if (event.key === "Enter") {
        this.props.postMessage(event.target.value)
        this.setState({value: ""})
      } else {
        console.log(event.target.value)
        this.setState({value: event.target.value})
      }
    }

    render () {
      console.log("Rendering <Chatbar/>")
      return (
      <div className  = "chatbar">
        <input className ="chatbar-username" defaultValue={this.props.currentUser.name} placeholder="Your Name (Optional)" />
        <input className ="chatbar-message" onKeyUp={this.postMessage} placeholder="Type a message and hit ENTER" />
      </div>
    )
  }
}




// let Chatbar = (props) =>
//        <div className = "chatbar">
//          <input className ="chatbar-username" defaultValue={props.currentUser.name}  placeholder="Your Name (Optional)" />
//          <input className ="chatbar-message" onKeyUp ={props.postMessage} placeholder="Type a message and hit ENTER" />

//        </div>




export default Chatbar



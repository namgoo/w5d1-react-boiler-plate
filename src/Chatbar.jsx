import React, {Component} from 'react';


class Chatbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentUser: this.props.currentUser,
        value: ""
      }
      this.postMessage = this.postMessage.bind(this)
      this.changeName = this.changeName.bind(this)
    }

    postMessage(event) { if (event.key === "Enter") {
        this.props.postMessage(event.target.value)
        this.setState({value: ""})
      } else {
        console.log(event.target.value)
        this.setState({value: event.target.value})
      }
    }

    changeName(event) {
      if (event.key === "Enter") {
        var oldUser= this.state.currentUser.name
        console.log('changeName from Chatbar ', 'oldUser:', oldUser, 'newName', event.target.value)
        this.props.changeName(oldUser, event.target.value)
        this.setState({currentUser: event.target.value})
      }
    }




    render () {
      console.log("Rendering <Chatbar/>")
      return (
      <div className  = "chatbar">
        <input className ="chatbar-username" defaultValue={this.props.currentUser.name} onKeyUp={this.changeName} placeholder="Your Name (Optional)" />
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



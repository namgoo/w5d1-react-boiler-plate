import React, {Component} from 'react';


class Chatbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {currentUser: this.props.currentUser}
    }
    render () {
      console.log("Rendering <Chatbar/>")
      return (
      <div className  = "chatbar">
        <input className ="chatbar-username" value={this.props.currentUser.name} placeholder="Your Name (Optional)" />
        <input className ="chatbar-message" placeholder="Type a message and hit ENTER" />
      </div>
    )
  }
}




export default Chatbar



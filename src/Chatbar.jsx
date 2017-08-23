import React, {Component} from 'react';


class Chatbar extends React.Component {
    render () {
      console.log("Rendering <Chatbar/>")
      return (



      <div className  = "chatbar">
        <input className ="chatbar-username" placeholder="Your Name (Optional)" />
        <input className ="chatbar-message" placeholder="Type a message and hit ENTER" />
      </div>
    )
  }
}




export default Chatbar



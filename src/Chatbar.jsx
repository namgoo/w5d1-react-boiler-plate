import React, {Component} from 'react';


let Chatbar = props => {
  return (
      <div className  = "chatbar">
        <input className ="chatbar-username"
          defaultValue={props.currentUser.name}
          onKeyUp={e => {
            if (e.key === "Enter") {
            props.changeName(e.target.value)
          }}}
          placeholder="Your Name (Optional)" />

        <input
          className ="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyUp={e => {
            if (e.key === "Enter") {
            props.postMessage(e.target.value)
            e.target.value = ""
            }
          }}
        />
      </div>
    )

}









export default Chatbar



import React, {Component} from 'react';


class MessageList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {currentMessage: this.props.currentMessage}
    }
      render () {
      console.log('Rendering <MessageList/>')
      console.log(this.props.currentMessage[0].username)
      console.log(this.props.currentMessage[0].content)
      return (
         <main className="messages">
        <div className="message">
          <span className="message-username"> {this.props.currentMessage[0].username} </span>
          <span className="message-content"> {this.props.currentMessage[0].content} </span>
        </div>
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
        </main>
      )
    }
}



export default MessageList
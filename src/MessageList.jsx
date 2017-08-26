import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends React.Component {
      render () {
      console.log('Rendering <MessageList/>')
      console.log(this.props.messages)
      return (
         <main className="messages">
           {this.props.messages.map((eachMessage) => {
          return (
           <Message key={eachMessage.id} eachMessage={eachMessage}/>
           )})}

        <div className="message system">

        </div>
        </main>
      )
    }
}





export default MessageList

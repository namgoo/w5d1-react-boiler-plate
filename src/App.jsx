import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: {name: 'Nam'},
        currentMessage: [
      {
        username: "Bob",
        content: "Has anyone seen my marbles?",
      },
      {
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
      }
     ]
      }
  }
      render() {
    console.log("Rendering <App/>")
    return (
    <div>
      <MessageList currentMessage={this.state.currentMessage}/>

      <Message />
      <Chatbar currentUser={this.state.currentUser}/>

    </div>

    );
  }
}




export default App;







import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: {name: 'Nam'},
        messages: [
      {
        id: "abc",
        username: "Bob",
        content: "Has anyone seen my marbles?",
      },
      {
        id: "def",
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
      }
     ]
      }
  }


  postMessage(content) {
    const newMessage = {username: this.state.currentUser.name, content: content};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages});
    this.socket.send(JSON.stringify(newMessage))
  }


  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming messages");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
      // this.socket.send("Here's some text that the server is urgently awaiting!")
    }, 3000);

      this.socket = new WebSocket("ws://localhost:3001") ;

  }

      render() {

    console.log("Rendering <App/>")
    console.log("messages", this.state.messages)
    return (
    <div>
      <MessageList messages={this.state.messages}/>

      <Chatbar currentUser={this.state.currentUser} postMessage={this.postMessage.bind(this)} />

    </div>

    );
  }
}




export default App;







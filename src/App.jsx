import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: {name: 'Nam'},
        messages: []
      }
  }


  postMessage(content) {
    const newMessage = {type: "postMessage", username: this.state.currentUser.name, content: content};
    const messages = this.state.messages.concat(newMessage)
    // this.setState({messages: messages});
    this.socket.send(JSON.stringify(newMessage))
  }

  changeName(oldName, newName) {
    const nameChange = {type: "postNotification", content: `${oldName} has changed their name to ${newName}`}
    console.log('nameChange: ', nameChange)
    this.setState({currentUser: {name: newName}})
    this.socket.send(JSON.stringify(nameChange))
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming messages");
      // Add a new message to the list of messages in the data store
      const newMessage = {type: "postMessage", id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
      // this.socket.send("Here's some text that the server is urgently awaiting!")
    }, 3000);

      this.socket = new WebSocket("ws://localhost:3001") ;
      this.socket.onmessage = (event) => {
        console.log('Receiving from the server', JSON.parse(event.data));
        //    Notifications -------------------------------------------------
      const data = JSON.parse(event.data);
        switch(data.type) {
          case "incomingMessage":
            const messages = this.state.messages.concat(JSON.parse(event.data));
            this.setState({messages: messages})
            break;
          case "incomingNotification":
            const notification = this.state.messages.concat(JSON.parse(event.data));
            this.setState({messages: notification})
            break;
          case "userCount":
            this.setState({userCount: data.number});
            break;
          default:
            // show an error in the console if the message type is unknown
            throw new Error("Unknown event type " + data.type);
      }
  }}

      render() {

    console.log("Rendering <App/>")
    console.log("messages", this.state.messages)
    return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty </a>
        <a className="navbar-numOfUsers"> {this.state.userCount} Users </a>
      </nav>

      <MessageList messages={this.state.messages}/>

      <Chatbar currentUser={this.state.currentUser} postMessage={this.postMessage.bind(this)} changeName={this.changeName.bind(this)} />

    </div>

    );
  }
}




export default App;







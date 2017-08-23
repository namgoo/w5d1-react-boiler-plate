import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx'

class App extends Component {
  render() {
    console.log("Rendering <App/>")
    return (
    <div>
      <MessageList />
      <h1>Hello React :)</h1>
      <Message />
      <Chatbar />

    </div>

    );
  }
}




export default App;

import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentUser: this.props.currentUser};
  }
  render() {
    console.log("Rendering <App/>")
    return (
    <div>
      <MessageList />

      <Message />
      <Chatbar currentUser={this.state.currentUser}/>

    </div>

    );
  }
}




export default App;







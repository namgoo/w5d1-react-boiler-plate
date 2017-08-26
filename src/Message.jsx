import React, {Component} from 'react';


// class Message extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render () {
//       return (
//             <div className="message">

//               <span  className="message-username"> {this.props.eachMessage.username} </span>
//               <span  className="message-content">  {this.props.eachMessage.content} </span>

//            </div>
//       )
//     }
//   }



let Message = (props) => {
  if(props.eachMessage.type === 'incomingMessage') {
    return (<div className="message">

              <span  className="message-username"> {props.eachMessage.username} </span>
              <span  className="message-content">  {props.eachMessage.content} </span>

            </div>);
  } else {
    return (<div className="message system">
            <span>  {props.eachMessage.content} </span>
        </div>)
  }

}






export default Message


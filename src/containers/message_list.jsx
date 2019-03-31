import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessageForm from './message_form';


import { setMessages } from '../actions';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.messageList = React.createRef();
  }

  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
    clearInterval(this.intervalID);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.fetchMessages, 500);
  }

  componentDidUpdate() {
    const messageList = this.messageList;
    messageList.current.scrollTop = messageList.current.scrollHeight;
  }

  fetchMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }

  render() {
    const timeRegex = /\d{2}:\d{2}:\d{2}/;
    return (
      <div className="message-list">
        <div className="font-bold message-list__title">
        Channel #{this.props.selectedChannel}
        </div>
        <div className="message-list__messages" ref={this.messageList}>
          {this.props.messages.map((message) => {
            return (
              <div className="message-list__message" key={(message.created_at).match(timeRegex)[0]}>
                <div>
                  <span className="font-red font-bold">{message.author}</span><span className="font-small"> - {message.created_at}</span>
                </div>
                <div>{message.content}</div>
              </div>
            );
          })}
        </div>
        <MessageForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

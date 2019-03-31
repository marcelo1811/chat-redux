import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessageForm from './message_form';


import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
    clearInterval(this.intervalID);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.fetchMessages, 500);
  }

  fetchMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }

  render() {
    console.log('RENDER MESSAGES');
    console.log(this.props.messages);
    const timeRegex = /\d{2}:\d{2}:\d{2}/;
    return (
      <div className="message-list">
        <div className="font-bold message-list__title">
          Channel #{this.props.selectedChannel}
        </div>
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

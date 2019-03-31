import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMessage } from '../actions';
import { setMessages } from '../actions';

class MessageForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const channel = this.props.selectedChannel;
    const author = this.props.username;
    const content = event.target.message.value;

    this.props.createMessage(channel, author, content);

    event.target.message.value = '';
  }

  render() {
    return (
      <form className="message-list__form" action="" onSubmit={this.handleSubmit}>
        <input className="form-control" name="message" type="text"/>
        <input className="btn btn-danger" type="submit"/>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedChannel: state.selectedChannel,
    username: state.currentUsername
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { createMessage: createMessage,
      setMessages: setMessages },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

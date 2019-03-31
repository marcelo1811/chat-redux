import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

import { setUsername } from '../actions';

class App extends Component {
  componentWillMount() {
    // const username = prompt("What's your name?");
    const username = "maarcelo";
    this.props.setUsername(username);
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <div className="sidebar__avatar">
            <img className="avatar-large" alt="avatar-large" src="https://kitt.lewagon.com/placeholder/users/arthur-littm" />
          </div>
        </div>
        <ChannelList />
        <MessageList />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setUsername: setUsername },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(App);

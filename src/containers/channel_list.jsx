import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setChannel } from '../actions';
import { setMessages } from '../actions';


class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.setChannel(channel);
    this.props.setMessages(channel);
  }

  render() {
    return (
      <div className="channel-list">
        <p className="font-bold">Redux chat</p>
        {this.props.channels.map((channel) => {
          return (
            <div key={channel} className="font-bold font-opaque" onClick={()=> this.handleClick(channel)}>
              #{channel}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setChannel: setChannel,
      setMessages: setMessages },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

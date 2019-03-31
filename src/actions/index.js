// TODO: add and export your own actions
const setMessages = (channel) => {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: 'SET_MESSAGES',
    payload: promise
  };
};

const setChannel = (channel) => {
  return {
    type: 'SET_CHANNEL',
    payload: channel
  };
};

const setUsername = (username) => {
  return {
    type: 'SET_USERNAME',
    payload: username
  };
};

const createMessage = (channel, author, content) => {
  const timeNow = Date().toLocaleString();
  const message = { "channel": channel, "author": author, "content": content, "created_at": timeNow };

  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  }).then(r => r.json());
  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  };
};

export { setMessages, setChannel, setUsername, createMessage };

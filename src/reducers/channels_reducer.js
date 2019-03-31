const channels = ['general', 'react', 'paris'];

const channelsReducer = (state, action) => {
  if (state === undefined) {
    return channels;
  }

  switch (action.type) {
    default:
      return state;
  }
};

export default channelsReducer;

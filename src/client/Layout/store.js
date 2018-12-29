const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'INITIALIZE_SESSION':
      return true;
    default: return state;
  }
};

export {
  loggedIn,
};

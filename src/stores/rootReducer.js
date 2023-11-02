const { combineReducers } = require("@reduxjs/toolkit");
const { default: userReducer } = require("./reducers/userReducer");
// const loadingReducer = require("./reducers/loadingReducer");

const rootReducer = combineReducers({
  user: userReducer,
  //   loading: loadingReducer,
  //   user: userReducer,
});

module.exports = rootReducer;

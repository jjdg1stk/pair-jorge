import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";

import userService from "../userService";
import TestHooks from "./testHooks";
import UserList from "./userList";
import useUserList from "./useUserList";

const intitialState = {name: "Jorge"}

const reducer = (initialState, action) => {
  if (!action.type) {
    return 
  }
  if (action.type === 'update') {
    return action.payload
  }
}


const App = () => {
  const [user, dispatch] = useReducer(reducer, intitialState);
  const [query, setQuery] = useState();

  useEffect(() => {
    dispatch({ type: 'update', payload: {name: "Margarito"} })
  }, [dispatch])

  return (
    <div>
      <h1>Hooks rocks! {user.name}</h1>
      <TestHooks />
      <UserList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

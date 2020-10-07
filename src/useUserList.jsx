import { useEffect, useReducer, useState } from "react";
import userService from "../userService";

const intitialState = {data: [], loading: true}

const reducer = (initialState, action) => {
  if (!action.type) {
    return 
  }
  if (action.type === 'update') {
    return action.payload
  }
}

const useUserList = () => {
  const [data, dispatch] = useReducer(reducer, intitialState);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    userService.getAllUser().then(data =>{
      dispatch({ type: 'update', payload: {data: data, loading: false} })
    }
    )
  }, [dispatch])

  const hello = (value) => console.log({ value });

  return {data, error, hello}
}

export default useUserList;
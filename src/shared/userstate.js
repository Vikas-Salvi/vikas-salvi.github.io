import React, {createContext, useReducer} from "react";

const initialState = {
    isLoggedIn: false,
    username: '',
    age: '',
    grade: '',
    category: ''
}
const reducer = (state, action) => {
    switch (action.type) {
      case 'login': {
        const form = action.action;
        return { ...state, isLoggedIn: true, username: form.username, age: form.age, grade: form.grade }
      }
      case 'logout':{
        return { ...initialState, isLoggedIn: false }
      }
      default:
        return state
    }
  }

const UserState = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ user: state, dispatch: dispatch }}>
            {children}
        </UserContext.Provider>
    )
};

export const UserContext = createContext(initialState);

export default UserState;
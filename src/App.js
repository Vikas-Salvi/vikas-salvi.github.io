import React, { useContext, useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from 'react-router-dom';
import TopNavigation from './shared/top-nav';
import Login from './shared/login';
import Quiz from './quiz/Quiz';
import Form from './shared/form';
import GameCategory from './quiz/GameCategory';
import Message from './components/Message';
import ParentCallbackComponent from './hooks/UseCallback/ParentCallbackComponent';
import NotFound from './shared/notfound';
import Welcome from './components/Welcome';
import SubRoute from './shared/subroute';
import Public from './protectedroute/public';
import Protected from './protectedroute/protected';
import PrivateRoute from './shared/privateroute';
import UserState from './shared/userstate';
import Charts from './charts/chartscomponent';

export const AppContext = React.createContext(null);

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
    case 'logout': {
      return { ...initialState, isLoggedIn: false }
    }
    case 'selectCategory': {
      const _selectedCategory = action.category;
      return {
        ...state,
        category: _selectedCategory
      }
    }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const App = () => {

  const [user, dispatch] = useReducer(reducer, initialState);

  let a = [1, 2, 5, 2, 1, 8];
  let arr = [1, 3, 2, "vikas", 1, false, "poonam", null, "avisha", 5, undefined, null, 5];

  let arrSet = new Set(arr);
  //console.log([...arrSet]);

  let b = [];
  let c = [];
  let dup = [];
  let len = a.length;

  for (let i = 0; i < len; i++) {
    if (b.indexOf(a[i]) === -1) {
      b.push(a[i]);
    }
  }
  //console.log(b); 

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (a[i] === a[j]) {
        dup.push(a[j]);
      }
    }
  }
  //console.log(dup);

  a.sort();
  let _temp;
  for (let i = 0; i < len; i++) {
    if (a[i] !== _temp) {
      c.push(a[i]);
      _temp = a[i];
    }
  }
  //console.log(c);

  let obj = {}
  for (let i of a) {
    obj[i] = true;
  }
  let d = Object.keys(obj);
  //console.log(d);

  let bSet = new Set(a);
  //console.log([...bSet]);

  return (
    <Router>
      <AppContext.Provider value={{ user: user, dispatch: dispatch }}>
        <div className="App">
          <TopNavigation username={user.username} isLoggedIn={user.isLoggedIn}></TopNavigation>
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Message} ></Route>
              <Route path="/category" component={GameCategory}></Route>
              <Route exact path="/quiz1" render={() => (
                user.isLoggedIn ? (
                  <Quiz></Quiz>
                ) : (
                    <Login></Login>
                  )
              )}
              ></Route>
              <Route path="/form" component={ParentCallbackComponent}></Route>
              <Route path="/welcome" component={Welcome}></Route>
              <Route path="/welcome" render={(props) => (
                <Welcome name="Vikas Salvi" ></Welcome>
              )}></Route>
              <Route path="/subroute" component={SubRoute}></Route>
              <Route path="/public" component={Public}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/charts" component={Charts}></Route>
              <PrivateRoute path="/quiz" component={Quiz}></PrivateRoute>
              <PrivateRoute path="/game" component={GameCategory}></PrivateRoute>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </AppContext.Provider>
    </Router>
  );

}

export default App;

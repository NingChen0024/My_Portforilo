import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;

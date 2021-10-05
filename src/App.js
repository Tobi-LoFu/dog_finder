
import React from 'react';
import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Dogs from './components/Dogs';


function App() {
  return (
    <BrowserRouter>
      <Main />

      <Switch>

        <Route path="/dogs/:name/:id">
          <Dogs/>
        </Route>

        <Redirect to="/dogs"/>
      </Switch>
    
    </BrowserRouter>
  );
}


export default App;
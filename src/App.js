import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

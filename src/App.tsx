import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomeContainer from './components/Home/HomeContainer';
import AboutContainer from './components/About/AboutContainer';

function App() {
  return (
     <BrowserRouter>
      <>
        <Switch>
           <Route path="/" component={HomeContainer} exact/>
           <Route path="/me" component={AboutContainer}/>
         </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;

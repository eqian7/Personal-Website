import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import HomeContainer from './components/Home/HomeContainer';

function App() {
  return (
     <BrowserRouter>
      <>
        <Switch>
           <Route path="/" component={HomeContainer} exact/>
           <Route component={HomeContainer}/>
         </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;

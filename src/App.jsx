import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Main from './pages/Main'
import Home from './pages/Home'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/home" component={Home} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

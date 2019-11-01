import React from 'react';
import './App.css';
import Index from './components/Index';
import {Route,Switch} from 'react-router-dom'
import Sign from './components/Sign';
import Reg from './components/Reg';

function App() {
  return (
                
            <Switch>         
             <Route path="/sign" component={Sign}></Route>
             <Route path="/reg" component={Reg}></Route>
             <Route path="/" component={Index}></Route>
             
            </Switch>
       
  );
}

export default App;

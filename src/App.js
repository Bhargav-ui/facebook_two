// import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css';
import Home from './components/Home/Home';
import Profile from "./components/Profile/Profile";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecoverPassword from './components/Profile/RecoverPassword';
import Addresses from './components/Addresses/Addresses';
import Files from './components/Files/Files';
import Data from './components/Data/Data';
import TwinData from './components/Data/TwinData';
import DataTwo from './components/Data/DataTwo';



function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/recover_password" component={RecoverPassword} />
          <Route exact path="/addresses" component={Addresses} />
          <Route exact path="/files" component={Files}/> 
          <Route exact path="/data" component={Data}/>
          <Route exact path="/twindata" component={TwinData}/>
          <Route exact path="/datatwo" component={DataTwo}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
// http://localhost:3000/recover_password?ref=14&hash=c473379aa643d3b3e598ee9c6c8bb9fc
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInAndSignUpComponent from './components/sing-in-and-sing-up/sing-in-and-sing-up-component';
import {auth} from './firebase/firebase.utils';



class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribFromAuth = null;

  componentDidMount(){
    this.unsubscribFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount(){
    this.unsubscribFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;

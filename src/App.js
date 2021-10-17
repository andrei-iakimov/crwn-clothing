import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInAndSignUpComponent from './components/sing-in-and-sing-up/sing-in-and-sing-up-component';
import {auth, createUserAuthDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';




class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserAuthDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
        
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpComponent} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  //dispatch user action from user reducer
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);

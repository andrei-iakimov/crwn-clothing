import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import Cart from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/card-icon.component";

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign out</div> :
                <Link className='option' to='/signin'>Sign in</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null :
        <Cart />}
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    //currentUser: state.user.currentUser
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
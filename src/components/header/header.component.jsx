import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {Link} from 'react-router-dom';

const Header = (props) => (
    <div className='header'>

        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
            
        <div className='options'>
            
            <Link to='/projects' className='option'>Projects</Link>
            <Link to='/invoice' className='option'>Invoice</Link>
            <Link to='/payments' className='option'>Payments</Link>
            <Link to='/clients' className='option'>Clients</Link>
            <Link to='/suppliers' className='option'>Suppliers</Link>
            <Link to='/workers' className='option'>Workers</Link>
            <Link to='/balance' className='option'>Balance</Link>
            <Link to='/sign_in' className='option-in'>Sign In</Link>

        </div>

    </div>
);

export default Header;

    // <div className='logo-container'>
    //     <Logo className='logo'></Logo>
    // </div>
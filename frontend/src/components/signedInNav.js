import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const SignedInNav = () => {
    const launchModal = () => {
    };
    
    return (
        <nav className='nav-wrapper'>
        <div className='container'>
            <div className='nav-logo'>
            <Link to='/'>Medium-Earth</Link>
            </div>
            <div className='spacer'></div>
            <div className='nav-links'>
            <Link to='/'>Our Story</Link>
            <Link to='/'>Fellowship</Link>
            <Link to='/'>Write</Link>
            <Link to='/'>Sign In</Link>
            <button onClick={launchModal}>Get Started</button>
            </div>
        </div>
        </nav>
    );
    }

export default SignedInNav;


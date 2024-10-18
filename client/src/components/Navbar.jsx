import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './Navbar.css'
function Navbar() {
    return (
        <>
            <Router>
            <nav className='navbar'>
                <div className='navbar-container'>
                    Haute Couture Alterations
                    <img src='https://static.vecteezy.com/system/resources/previews/019/548/341/original/hca-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg' alt='Haute Couture Alterations' className='navbar-logo' />
                </div>
            </nav>
            <Switch>
                <Route path='/' exact />
            </Switch>
            </Router>
            
        </>
    );
}

export default Navbar;

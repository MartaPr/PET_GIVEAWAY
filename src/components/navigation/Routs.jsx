import React from 'react';
import Admin from '../admin/Admin';
import Home from '../home/Home';


import { BrowserRouter, Route, Link } from 'react-router-dom';

const Routs = () => {
    return (
        <BrowserRouter>

            <div className="routs">
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/Admin">Admin</Link>
                </div>
                <div>
                    <Route path="/admin" component={Admin} ></Route>
                    <Route exact path="/" component={Home} ></Route>
                </div>
            </div>

        </BrowserRouter>
    );
};

export default Routs;
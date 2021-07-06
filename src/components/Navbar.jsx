import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {
    return (
        <>
            <Header></Header>
            <div className="row d-flex justify-content-center align-items-center">
                <Link to="/" className="btn btn-dark col-5 m-3 p-4">
                    Go Home
                </Link>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <Link to="/films" className="btn btn-dark col-2 m-3 mt-0 p-4">
                    View Films
                </Link>
                <Link to="/people" className="btn btn-dark col-2 m-3 mt-0 p-4">
                    View People
                </Link>
            </div>
        </>
    )
}

export default Navbar;
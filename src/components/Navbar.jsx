import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto'>

                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/">Assignment</NavLink>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/">TO DO LIST<span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="/page1">PAGE1</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink className="nav-link" to="/page2">PAGE2</NavLink>
                                </li>
                            </ul>

                        </div>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Navbar

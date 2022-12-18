import React from "react";
import CartWidget from "../CartWidget";


export const NavBar = () => {
    return (

        <div className="container">
            <nav className="nav">
                <div className="nav_brand"> 
                    <a className="nav_link" href="#">Mi PROYECTO REACT</a>
                </div>

                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">Item 1</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Item 2</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#"> <CartWidget /> </a>
                    </li>


                </ul>
            </nav>
        </div>


    );
}

export default NavBar;
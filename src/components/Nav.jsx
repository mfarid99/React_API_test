import React from "react"
import {Link} from "react-router-dom"
import { Navbar, NavDropdown} from 'react-bootstrap';


export const Nav = (props) => {

    return (<>

    <nav>

        <Navbar> 
        <NavDropdown title="Films" id="basic-nav-dropdown">

        <NavDropdown.Item href="#action/3.1"> 
        <Link to="/theterminator">
            <div >
                The Terminator
            </div>
        </Link>
        </NavDropdown.Item>

        <NavDropdown.Item href="#action/3.2"> 
        <Link to="/terminator2">
            <div >
                Terminator 2
            </div>
        </Link>
        </NavDropdown.Item>

        <NavDropdown.Item href="#action/3.3"> 
        <Link to="/terminator3">
            <div >
                Terminator 3
            </div>
        </Link>
        </NavDropdown.Item>

        <NavDropdown.Item href="#action/3.4"> 
        <Link to="/terminatorsalvation">
            <div >
                Terminator Salvation
            </div>
        </Link>
        </NavDropdown.Item>

        <NavDropdown.Item href="#action/3.5"> 
        <Link to="/terminatorgenysis">
            <div >
                Terminator Genisys
            </div>
        </Link>
        </NavDropdown.Item>

        <NavDropdown.Item href="#action/3.6"> 
        <Link to="/terminatordarkfate">
            <div >
                Terminator: Dark Fate
            </div>
        </Link>
        </NavDropdown.Item>

        </NavDropdown>

        </Navbar>
        
    </nav>
    
    </>)
   
}
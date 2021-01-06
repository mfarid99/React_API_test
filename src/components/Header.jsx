import React from "react"
import {Nav} from "./Nav.jsx"
import {Link} from "react-router-dom"

export const Header = (props) => {

    const h1Style = {textAlign: "center",}

    return (<>
     <Link to="/"> <h1 style={h1Style}>Terminator Films </h1></Link> 
    <Nav/>
    </>)
}
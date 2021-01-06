import React from "react"
import {Link} from "react-router-dom"

export const Nav = (props) => {

    return (<>

    <nav>
        <Link to="/theterminator">
            <div >
                The Terminator
            </div>
        </Link>

        <Link to="/terminator2">
            <div >
                Terminator 2
            </div>
        </Link>

        <Link to="/terminator3">
            <div >
                Terminator 3
            </div>
        </Link>

        <Link to="/terminatorsalvation">
            <div >
                Terminator Salvation
            </div>
        </Link>

        <Link to="/terminatorgenisys">
            <div >
                Terminator Genisys
            </div>
        </Link>

        <Link to="/terminatordarkfate">
            <div >
                Terminator: Dark Fate
            </div>
        </Link>

        
    </nav>
    
    </>)
   
}
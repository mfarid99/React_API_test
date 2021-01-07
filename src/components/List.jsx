import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


const terminator = {

    theterminator: "https://www.omdbapi.com/?t=the+terminator&apikey=523fa1a9",

    terminator2: "https://www.omdbapi.com/?t=terminator+2&apikey=523fa1a9",

    terminator3: "https://www.omdbapi.com/?t=terminator+3&apikey=523fa1a9", 

    terminatorgenysis: "https://www.omdbapi.com/?t=terminator+genisys&apikey=523fa1a9",

    terminatordarkfate: "https://www.omdbapi.com/?t=terminator+dark+fate&apikey=523fa1a9",

    terminatorsalvation: "https://www.omdbapi.com/?t=terminator+salvation&apikey=523fa1a9",
}


export const List = (props) => { 

    const selected = props.match.params.terminator

    const [list, setList] = React.useState(null)

    React.useEffect(() => {
         fetch(terminator[selected])
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setList(data);
        });
    }, [selected]);

    return list ? (
            <Container fluid>
                  <Row>
                  <Col>
            <img className="poster" src = {list.Poster} />
                   </Col>
                   <Col> 
            <div> <h1>{list.Title}</h1> </div>
             <div><h1>Year:{list.Year} </h1></div>

            <div><h1> Rated:{list.Rated} </h1></div>

           <div> <h1>  Director:{list.Director}</h1></div>
            <div> <h1> Box Office:{list.BoxOffice}</h1></div>

            <div> <p> <h3> <span className="plot"> Plot:</span>  {list.Plot}</h3></p></div>
            </Col>
            </Row>
            </Container>
    ) : <h1>Loading...</h1>
};
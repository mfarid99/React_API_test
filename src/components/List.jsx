import React from "react"

const terminator = {

    theterminator: "http://www.omdbapi.com/?t=the+terminator&apikey=523fa1a9",

    terminator2: "http://www.omdbapi.com/?t=terminator+2&apikey=523fa1a9",

    terminator3: "http://www.omdbapi.com/?t=terminator+3&apikey=523fa1a9", 

    terminatorgenisys: "http://www.omdbapi.com/?t=terminator+genisys&apikey=523fa1a9",

    terminatordarkfate: "http://www.omdbapi.com/?t=terminator+dark+fate&apikey=523fa1a9",

    terminatorsalvation: "http://www.omdbapi.com/?t=terminator+salvation&apikey=523fa1a9",
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
        <div className="info">

<img src = {list.Poster} />
            <div> 
            <div> <h1>{list.Title}</h1> </div>
            <div><h1>{list.Year} </h1></div>

            <div><h1> {list.Rated} </h1></div>

            <div> <h1> {list.Director}</h1></div>
            <div> <h1> {list.BoxOffice}</h1></div>

            <div> <p> <h3> {list.Plot}</h3></p></div>

            </div>
        </div>
    ) : <h1>Loading...</h1>
};
Day 5 of 100 - I built a React project and pulled data from the movies API OMDB API. I started by installing React and creating a folder for the project. Then, I connected and pushed the folder to github. The next step was deploying it via Netlify. Then, I created a file called api.html to test the fetch and ensure there are no CORS issues and that the API is useful and operational: 

fetch("http://www.omdbapi.com/?t=True+Romance&apikey=523fa1a9")
        .then(response=> response.json())
        .then(data => {
            console.log(data)
        })

I used Live Server to view the browser and verififed the data is showing under the console tab.  I created 3 components (Header, Home, List) and then I installed react router (npm install react-router react-router-dom). Then I imported {BrowserRouter as Router, Route, Switch}. 

Everything will be wrapped in the Router component <Router>
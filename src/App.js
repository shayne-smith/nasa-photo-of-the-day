import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import LandingPhoto from "./components/LandingPhoto";
import NasaLogo from "./components/NasaLogo";
import PhotoOfDayText from "./components/PhotoOfDayText";

const base_url = `https://api.nasa.gov/planetary/apod`;
const api_key = `Km0M9l3bFGvjU4DYAlx42xuhKxYxefshyc2IqjKb`;

function App() {
  const [nasaData, setNasaData] = useState(null); 

  useEffect(() => {
    console.log('this runs ONLY first time whenever DOM is updated');
    axios.get(`${base_url}?api_key=${api_key}`)
    .then(res => {
      setNasaData(res.data)
      debugger
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      {/* <Header />
      {/* <div className="header">

      </div> */}
      <NasaLogo />
      {nasaData && <LandingPhoto url={nasaData.url} />}
      {nasaData && <PhotoOfDayText explanation={nasaData.explanation}/>}

      {/* <div>
      
      <img src="" />
      </div> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from 'styled-components';

import Header from "./components/Header";
import LandingPhoto from "./components/LandingPhoto";
import NasaLogo from "./components/NasaLogo";
import PhotoOfDayText from "./components/PhotoOfDayText";
import Breakpoint from "./components/Breakpoint";



const base_url = `https://api.nasa.gov/planetary/apod`;
const api_key = `Km0M9l3bFGvjU4DYAlx42xuhKxYxefshyc2IqjKb`;

function App() {
  const [nasaData, setNasaData] = useState(null); 

  const AppWrapper = styled.div`
    max-width: 800px;
    text-align: center;
    margin: 0 auto;

    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    padding: 12px;
    background-color: white;
  `;

  useEffect(() => {
    console.log('this runs ONLY first time whenever DOM is updated');
    axios.get(`${base_url}?api_key=${api_key}`)
    .then(res => {
      setNasaData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <AppWrapper>
      <Header>
        <NasaLogo />
      </Header>

      {nasaData && <LandingPhoto src={nasaData.hdurl} alt={'The Atlas Comet ripping apart.'}/>}
      {nasaData && <PhotoOfDayText>{nasaData.explanation}</PhotoOfDayText>}
      <Breakpoint />

      {nasaData && <LandingPhoto src={nasaData.hdurl} alt={'The Atlas Comet ripping apart.'}/>}
      {nasaData && <PhotoOfDayText>{nasaData.explanation}</PhotoOfDayText>}
      <Breakpoint />

      {nasaData && <LandingPhoto src={nasaData.hdurl} alt={'The Atlas Comet ripping apart.'}/>}
      {nasaData && <PhotoOfDayText>{nasaData.explanation}</PhotoOfDayText>}
      <Breakpoint />

      {nasaData && <LandingPhoto src={nasaData.hdurl} alt={'The Atlas Comet ripping apart.'}/>}
      {nasaData && <PhotoOfDayText>{nasaData.explanation}</PhotoOfDayText>}
      <Breakpoint />

      {/* <div>
      
      <img src="" />
      </div> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

    </AppWrapper>
  );
}

export default App;

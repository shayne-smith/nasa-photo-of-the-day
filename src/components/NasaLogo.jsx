import React from "react";
import logo from "../Assets/nasaLogo.png";
import styled from 'styled-components';

// CSS Styling For The NASA logo
const LogoWrapper = styled.div`
    text-align: left;
`;


const NasaLogo = () => {
    return (
        <LogoWrapper>
            <img alt="Nasa logo" src={logo} />
        </LogoWrapper>
    )
}

export default NasaLogo
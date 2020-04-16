import styled from 'styled-components';


const LandingPhoto = styled.img`
    border-radius: 8px;
    src: ${props => props.hdurl ? props.hdurl : 'inherit'};
    alt: ${props => props.alt ? props.alt : 'inherit'};
    margin: 10px auto;
    max-width: 100%;
`;


export default LandingPhoto
import styled from '@emotion/styled';
// Componentes Generales
import MainWrapper from './../common/MainWrapper.styled'
// Paleta de Colores

// Creaacion de styled components
export const MainContainer = styled.main`
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: black;
`;
export const BackgroundContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
export const BackgroundImage = styled.img`
    width: 100%;
    object-fit: cover;
`;
export const CardWrapper = styled(MainWrapper)`
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
`;
export const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(83, 83, 83, 0.4);
    border-radius: 20px;
    backdrop-filter: blur(25px);
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    box-shadow: 0 0 15px rgba(39, 39, 39, 0.25);
    justify-content: space-between;
`;
export const CardTitle = styled.h1`
    text-align: center;
    font-weight: 400;
    color: #ffffff;
    text-shadow: 0 0 5px rgba(20, 20, 20, 0.5);
`;
export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const InfoContainer = styled.p`
    color: #dfdfdf;
    text-shadow: 0 0 5px rgba(20, 20, 20, 0.5);
    margin-bottom: 30px;
`;
export const LabelInput = styled.label`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #dfdfdf;
`;
export const NumberInput = styled.input`
    font-size: 1.4rem;
    padding: 8px 12px;
    color: #4b4b4b;
`;
export const MainButtonWrapper = styled.div`
    display: block;
    border: 2px solid #ffffff;
    background-color: transparent;
    box-shadow: 0 0 10px rgba(71, 71, 71, 0.75);
`;
export const MainButton = styled.button`
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 0 0 5px rgba(165, 165, 165, 0.1);
    padding: 10px 15px;
    height: 100%;
    width: 100%;
`;

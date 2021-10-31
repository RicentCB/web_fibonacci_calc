import styled from '@emotion/styled';
// Componentes Generales
import MainWrapper from './../common/MainWrapper.styled'
// Paleta de Colores
import {
    ColorAccent,
    ColorDark1,
    ColorLight1,
    ColorLight2,
    ColorShadow1,
    ColorShadow2,
    ColorShadow3,
    ColorShadow4
} from '../common/pallet.const';

// Creaacion de styled components
export const MainContainer = styled.main`
    height: 100vh;
    width: 100vw;
    position: relative;
    min-height: 600px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (min-width: 500px){
        padding: 40px 15vw;
    }
    @media only screen and (min-width: 768px){
        padding: 30px 18vw;
    }
    @media only screen and (min-width: 1024px){
        padding: 40px 25vw;
    }
    @media only screen and (min-width: 1920px){
        padding: 40px 30vw;
    }
`;
export const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${ColorShadow1};
    border-radius: 20px;
    backdrop-filter: blur(25px);
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 15px ${ColorShadow2};
    justify-content: space-between;
    padding: 40px 20px;
    max-height: 550px;
    transition: all ease-in-out 0.1s;
    @media only screen and (min-width: 500px){
        padding: 40px 40px;
    }
    @media only screen and (min-width: 768px){
        padding: 50px 70px;
        max-height: 650px;
    }
    @media only screen and (min-width: 1024px){
        padding: 60px 90px;
    }
`;
export const CardTitle = styled.h1`
    text-align: center;
    font-weight: 400;
    color: ${ColorLight1};
    text-shadow: 0 0 5px ${ColorShadow3};
`;
export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const InfoContainer = styled.p`
    color: ${ColorLight2};
    text-shadow: 0 0 5px ${ColorShadow3};
    margin-bottom: 30px;
    span{
        font-size: 1.5rem;
        font-weight: bold;
        @media only screen and (min-width: 768px){
            font-size: 2.4rem;
            &.result{
                font-size: 2rem;
            }
        }
        &.result{
            font-size: 1.8rem;
            border-bottom: 2px solid ${ColorLight2};
        }
    }
`;
export const LabelInput = styled.label`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: ${ColorLight2};
`;
export const NumberInput = styled.input`
    font-size: 1.4rem;
    padding: 8px 12px;
    color: ${ColorDark1};
`;
export const MainButtonWrapper = styled.div`
    display: block;
    border: 2px solid ${ColorLight1};
    background-color: transparent;
    box-shadow: 0 0 10px ${ColorShadow3};
    transition: all ease-in-out 0.25s;
    width: 100%;
    &:hover{
        background-color: ${ColorAccent};
        transform: scale(1.05);
    }
    @media only screen and (min-width: 768px){
        width: 60%;
        margin: 0 auto;
    }
    @media only screen and (min-width: 1024px){
        width: 50%;
    }
`;
export const MainButton = styled.button`
    color: ${ColorLight1};
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 0 0 5px ${ColorShadow4};
    padding: 10px 15px;
    height: 100%;
    width: 100%;
    @media only screen and (min-width: 768px){
        padding: 12px 15px;
    }
`;

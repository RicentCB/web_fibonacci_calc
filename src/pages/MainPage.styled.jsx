import styled from '@emotion/styled';
// Componentes Generales
import MainWrapper from './../common/MainWrapper.styled'

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

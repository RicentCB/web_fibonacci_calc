import { useState, useEffect } from 'react';
// Styled components
import {
  BackgroundContainer,
  MainContainer,
  BackgroundImage,
  CardWrapper,
  CardContainer,
  CardTitle,
  InfoWrapper,
  InfoContainer,
  NumberInput,
  LabelInput,
  MainButtonWrapper,
  MainButton
} from './MainPage.styled'
// Asets
import BackImg from '../assets/spiral.jpg';

const MainPage = () => {

  // Agregar animacion al "Card" Principal, escuchando los movimientos del cursor
  useEffect(() => {
    const CardContainer = document.querySelector('.card-container');
    const Card = CardContainer?.querySelector('.main-card');

    const mouseMoveCallback = e => {
      if(e.target === CardContainer){
        const xAxys = (window.innerWidth / 2 - e.pageX) / 15;
        const yAxys = (window.innerHeight / 2 - e.pageY) / -10;
        Card.style.transform = `rotateY(${xAxys}deg) rotateX(${yAxys}deg)`;
      }
    };

    const mouseEnterCallback = () => {
      Card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    // Agregar "Event Listener"
    CardContainer.addEventListener("mousemove", mouseMoveCallback);
    Card.addEventListener("mouseenter", mouseEnterCallback);
    // Remover "Event Listener"
    return () => {
      CardContainer.removeEventListener("mousemove", mouseMoveCallback);
      Card.removeEventListener("mouseenter", mouseEnterCallback);
    }
  });

  // Creacion de componente principal
  return (
    <MainContainer>
      <BackgroundContainer>
        <BackgroundImage src={BackImg} />
      </BackgroundContainer>
      <CardWrapper className="card-container">
        <CardContainer className="main-card">
          <CardTitle>
            Calculadora de Fibonacci
          </CardTitle>
          <InfoWrapper>
            <InfoContainer>
              La siguiente aplicación te ayduara a conocer si un número pertenece a la serie de Fibonacci
            </InfoContainer>
            <LabelInput>
              Introduce un número a calcular:
            </LabelInput>
            <NumberInput type="number" placeholder="E.g 1, 2" />
          </InfoWrapper>
          <MainButtonWrapper>
            <MainButton>
              Calcular
            </MainButton>
          </MainButtonWrapper>
        </CardContainer>
      </CardWrapper>
    </MainContainer>
  );
}

export default MainPage
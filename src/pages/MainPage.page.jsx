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

  // Creacion de componente principal
  return (
    <MainContainer>
      <BackgroundContainer>
        <BackgroundImage src={BackImg}/>
      </BackgroundContainer>
      <CardWrapper>
        <CardContainer>
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
            <NumberInput type="number" placeholder="E.g 1, 2"/>
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
// Styled components
import {
  BackgroundContainer,
  MainContainer,
  BackgroundImage,
  CardWrapper,
  CardContainer,
  CardTitle
} from './MainPage.styled'
// Asets
import BackImg from '../assets/spiral.jpg';

const MainPage = () => {
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
          </CardContainer>
        </CardWrapper>
      </MainContainer>
  )
}

export default MainPage
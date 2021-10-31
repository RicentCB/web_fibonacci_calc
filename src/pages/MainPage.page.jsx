// Styled components
import {
  BackgroundContainer,
  MainContainer,
  BackgroundImage,
  CardWrapper
} from './MainPage.styled'
// Asets
import BackImg from '../assets/goldenRatioBig.jpg';

const MainPage = () => {
  return (
      <MainContainer>
        <BackgroundContainer>
          <BackgroundImage src={BackImg}/>
        </BackgroundContainer>
        <CardWrapper>
          ''
        </CardWrapper>
      </MainContainer>
  )
}

export default MainPage
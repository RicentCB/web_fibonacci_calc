import styled from '@emotion/styled';

const MainWrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 25px;
  display: flex;
  @media only screen and (min-width: 500px){
    padding: 40px 35px;
  }
  @media only screen and (min-width: 768px){
    padding: 5vh 5vw;
  }
  @media only screen and (min-width: 1024px){
    padding: 5vh 8vw;
  }
`
export default MainWrapper;
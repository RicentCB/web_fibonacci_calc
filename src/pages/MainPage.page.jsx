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
  // Objeto para advertencias/validaciones
  const [warning, setWarning] = useState({
    message: '',
    show: false,
  });

  // Objeto para caluculo de fibonacci
  const [fibonacci, setFibonacci] = useState({
    number: 0,
    isFibonacci: false,
    showResult: false
  });

  // Agregar animacion al "Card" Principal, escuchando los movimientos del cursor
  useEffect(() => {
    const CardContainer = document.querySelector('.card-container');
    const Card = CardContainer?.querySelector('.main-card');

    const mouseMoveCallback = e => {
      if (e.target === CardContainer) {
        const xAxys = (window.innerWidth / 2 - e.pageX) / 20;
        const yAxys = (window.innerHeight / 2 - e.pageY) / -50;
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

  // Funcion para calcular si un numero pertenece a fibonacci
  // Algoritmo de: https://www.geeksforgeeks.org/check-number-fibonacci-number/

  // Metodo para encontrar si un numero es cuadrado perfecto
  const isPerfectSquare = x => {
    const sqrt = Number.parseInt(Math.sqrt(x));
    return (sqrt * sqrt === x);
  }
  // Validacion de numero pertenece a la serie de fibonacci
  const isThisFibonacci = n => (
    isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4)
  );

  //--------------------------------------------------------
  // Eventos por el usuario
  //--------------------------------------------------------

  // Funcion para valida numero
  const validateNumber = number => {
    // Validacion de numeros enteros
    if (!Number.isInteger(number)) {
      setWarning({
        message: ' solo se permiten números enteros',
        show: true
      });
      return false;
    }
    // Validacion de numero positivo
    if (number <= 0) {
      setWarning({
        message: ' solo se permiten números mayores a cero',
        show: true
      });
      return false;
    }
    // ----------------------------------
    // Paso todas las validaciones
    // ----------------------------------
    // Ocultar advertencias
    setWarning({
      ...warning,
      show: false,
    });
    // Retornar validacion
    return true;
  }

  // Mostrar resultado al usuaruo
  const showResultUser = () => {
    const number = Number(fibonacci.number);
    const isFibonacci = isThisFibonacci(number);
    setFibonacci({
      ...fibonacci,
      isFibonacci,
      showResult: true,
    });
  }

  // Escribir un numero en el input
  const onKeyNumber = e => {
    if (e.key !== 'Enter') {
      // Alamacenar numero
      const number = Number(e.target.value);
      // Validar número de entrada
      if (validateNumber(number)) {
        // Guardar numero
        setFibonacci({
          ...fibonacci,
          number,
          showResult: false,
        });
      }
    } else {// Se presiono enter, mostrar si es fibonacci
      // Validar número de entrada
      showResultUser();
    }
  }

  // Hacer click en el boton para calcular
  const onMainButtonClick = e => {
    showResultUser();
  }

  //--------------------------------------------------------
  // Creacion de componente principal
  //--------------------------------------------------------
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
            {
              warning.show ?
                <InfoContainer>
                  Revisa el número de entrada,
                  <span>
                    {warning.message}
                  </span>
                </InfoContainer> :
                fibonacci.showResult ?
                  <InfoContainer>
                    El número <span className="result"> 
                      {fibonacci.number} {!fibonacci.isFibonacci ? 'no' : ''} es fibonacci
                    </span>
                  </InfoContainer>
                  : <InfoContainer>
                    La siguiente aplicación te ayduara a conocer si un número pertenece a la serie de Fibonacci
                  </InfoContainer>
            }
            <LabelInput>
              Introduce
              {warning.show ?  ' otro ' : fibonacci.showResult ? ' otro ' : ' un '}
              número a calcular:
            </LabelInput>
            <NumberInput type="number" placeholder="E.g 1, 2" onKeyUp={onKeyNumber} min="0" step="1" />
          </InfoWrapper>
          <MainButtonWrapper>
            <MainButton onClick={onMainButtonClick}>
              Calcular
            </MainButton>
          </MainButtonWrapper>
        </CardContainer>
      </CardWrapper>
    </MainContainer>
  );
}

export default MainPage
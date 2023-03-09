import { useState } from "react";
import { Container } from "./styles";

import BR from '../../assets/Icons/brazil.png';
import EN from '../../assets/Icons/united-states.png';
import ES from '../../assets/Icons/spain 2.png';

import { Portugues } from "../Portugues";
import { Ingles } from "../Ingles";
import { Espanhol } from "../Espanhol";


export function Buttons() {
  const [port, setPort] = useState(false);
  const [ing, setIng] = useState(false);
  const [esp, setEsp] = useState(false);

  function clickPortugues() {
    setIng(false);
    setEsp(false);
    setPort(true);
  }

  function clickIngles() {
    setPort(false);
    setEsp(false);
    setIng(true);
  }

  function clickEspanhol() {
    setPort(false);
    setIng(false);
    setEsp(true);
  }

  return (
    <>
      <Container>
        <button id='br' onClick={clickPortugues}>
          <img src={BR} />
          <p>Português</p>
        </button>
        <button id='us' onClick={clickIngles}>
          <img src={EN} />
          <p>Inglês</p>
        </button>
        <button id='es' onClick={clickEspanhol}>
          <img src={ES} />
          <p>Espanhol</p>
        </button>
      </Container>

      {/*Criando a condicional para os buttons*/}

      {port === true && (
        <Portugues />
      )}
      {ing === true && (
        <Ingles />
      )}
      {esp === true && (
        <Espanhol />
      )}

      {!ing === true && (
        <Portugues />
      ) &&
        !esp === true && (
          <Portugues />
        )}
    </>
  )
}
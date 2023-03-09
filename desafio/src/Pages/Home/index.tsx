import { Buttons } from '../../Components/Buttons';
import { Header } from '../../Components/Header';

import { TableLang } from '../../Components/Table';

import { Container } from './styles';


export function Home() {

  return (
    <>
      <Container>
        <Header />
        <TableLang />
        <Buttons />
      </Container>
    </>
  )
}
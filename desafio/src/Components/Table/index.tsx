import { Container } from './styles';

export function TableLang() {

  const myTech1 = ['JavaScript', 'React', 'Vue Js', 'Tailwind CSS']
  const myTech2 = ['Styled Components', 'Saas', 'Node', 'TypeScript']
  const myTech3 = ['Angular', 'Java']

  return (
    <>
    <Container>
    <ul id='list1'>
        {
          myTech1.map((e, index) => (
            <li key={index}>{e}</li>
          ))
        }
      </ul>
      <ul id='list2'>
        {
          myTech2.map((e, index) => (
            <li key={index}>{e}</li>
          ))
        }
      </ul>
      <ul id='list3'>
        {
          myTech3.map((e, index) => (
            <li key={index}>{e}</li>
          ))
        }
      </ul>
    </Container>     
    </>
  )
}
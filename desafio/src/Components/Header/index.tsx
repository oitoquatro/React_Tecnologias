import { Container, Content, ImageLogo, ImageLogo2} from './styles';
import LogoSvg from'../../assets/Images/image 1.png';
import LogoSvg2 from'../../assets/Icons/Logo (1).png';

export function Header() {
  return(
    <Container>
      <Content>
        <ImageLogo src={LogoSvg} alt='StackX' />
        <ImageLogo2 src={LogoSvg2} alt='StackX' />
      </Content>
    </Container>
  )
}
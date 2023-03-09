import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #121212;

  --white: #ffffff;
  --white-400: #ededed;

  --grey-400: #27272a;

  --orange-400: #9d4b00;

  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  overflow: hidden;  
}

body, input, textarea, button{
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
}

h1,h2,h3,h4,h5,h6, strong{  
font-family: 'Inter', sans-serif;
font-size: 24px;
font-weight: 700;
line-height: 38px;
letter-spacing: 0em;
text-align: center;

font-size: 24px;
font-weight: 500;
line-height: 38px;
letter-spacing: 0em;
text-align: center;

color: var(--white)

}

button{
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

}
`
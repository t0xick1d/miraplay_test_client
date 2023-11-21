import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`


:root {
  --main-green-color: #3f9c14;
  --main-text-color: #eaeaea;
  --second-text-color: #afafaf;
  --main-bg-color: #181818;
  --error-color: #df1332;
  --mobile: 320px;
  --tablet: 768px;
  --desktop: 1200px;
  --transitionButton: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

@font-face {
  font-family: "NeueMachina";
  font-style: normal;
  font-weight: 500;
  src: local("NeueMachina Light"),
        local("NeueMachina-Light"),
        url("./fonts/NeueMachina-Light.ttf") format("ttf");
  font-display: swap;
}
@font-face {
  font-family: "NeueMachinaRegular";
  font-style: normal;
  font-weight: 600;
  src: local("NeueMachina Regular"),
        local("NeueMachina-Regular"),
        url("./fonts/NeueMachina-Regular.ttf") format("ttf");
  font-display: swap;
}
@font-face {
  font-family: "NeueMachinaUltrabold";
  font-style: normal;
  font-weight: 700;
  src: local("NeueMachina Ultrabold"),
        local("NeueMachina-Ultrabold"),
        url("./fonts/NeueMachina-Ultrabold.ttf") format("ttf");
  font-display: swap;
}

body {


}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li{
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
}

h1,h2,h3,h4,h5,h6,p{
  margin: 0;
  padding: 0;
}

svg{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
p{
  margin: 0;
  padding: 0;
}
`;

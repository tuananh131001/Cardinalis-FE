import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
*,*::after,*::before{
margin:0;
padding:0;
box-sizing:border-box;
}

:root{
  /* Light theme */
  --primary_color_light: #DC6C14;
  --secondary_color_light: #4E98C7;
  --text_placeholder_light:#D7D5D8;
  --background-color_light: #FEFAF7;
  --subtext_color_light: #626C7A;
  --subtext2_color_light:#46515C;
  --text_color_light:#323337;
  --input_background_light:#EDEDEE;
  --button_text_light:#fff;
  --card_background_light:#FEFAF7;
  /* Dark theme */
  --primary_color_dark: #D2AA6A;
  --secondary_color_dark: #A7CCE3;
  --text_placeholder_dark:#7A7A81;
  --background-color_dark: #1E1B1E;
  --subtext_color_dark: #CED9E9;
  --subtext2_color_dark:#CED9E9;
  --text_color_dark:#F7F9FF;
  --input_background_dark:#EDEDEE;
  --button_text_dark:#000;
  --card_background_dark:#3B353B;  
}

#root{
  display: flex;
  flex-direction:row;
  min-height:100vh;
  width:100%;
  background-color:${({ theme }) => theme.body.backgroundColor};
  font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyled;

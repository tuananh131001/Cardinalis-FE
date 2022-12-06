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
  --input_color_border: #676767;

  --primary_button_background_light:#DC6C14;
  --primary_button_text_light:#FFFFFF;
  --secondary_button_background_light: transparent;
  --secondary_button_text_light: #0F1419;
  --secondary_button_border_light: #CFD9DE;
  --card_background_light:#FEFAF7;

  /* Dark theme */
  --primary_color_dark: #DC6C14;
  --secondary_color_dark: #A7CCE3;
  --text_placeholder_dark:#7A7A81;
  --background-color_dark: #1E1B1E;
  --subtext_color_dark: #CED9E9;
  --subtext2_color_dark:#CED9E9;
  --text_color_dark:#F7F9FF;

  --input_background_dark:#EDEDEE;
  --input_color_border_dark: #DC6C14;
  
  --primary_button_background_dark:#DC6C14;
  --primary_button_text_dark:#FFFFFF;
  --secondary_button_background_dark: transparent;
  --secondary_button_text_dark: #FFFFFF;
  --secondary_button_border_dark: #536471;
  --card_background_dark:#3B353B;  

  --font-family: 'Open Sans';
}

#root{
  display: flex;
  flex-direction:row;
  min-height:100vh;
  width:100%;
  background-color:${({ theme }) => theme.body.backgroundColor};
  font-family: var(--font-family), sans-serif;
  }
  .app {
    width: 100%;
  }
`;

export default GlobalStyled;

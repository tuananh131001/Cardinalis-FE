import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
*,*::after,*::before{
margin:0;
padding:0;
box-sizing:border-box;
}

:root{
  /* --------------------- Light theme --------------------- */
  --primary_color_light: #DC6C14;
  --secondary_color_light: #4E98C7;
  --text_placeholder_light:#D7D5D8;
  --background-color_light: #FEFAF7;

  /* text color */
  --subtext_color_light: #626C7A;
  --subtext2_color_light:#46515C;
  /* --text_color_light:#323337; */
  --text_color_light: #0F1419;
  --paragraph_text_light: #0F1419;
  --error_text_light: #c61124;

  /* input color */
  --input_background_light:#EDEDEE;
  --input_color_border: #676767;

  /* button color */
  --primary_button_background_light:#DC6C14;
  --primary_button_text_light:#FFFFFF;
  --secondary_button_background_light: #0F1419;
  --secondary_button_text_light: #fff;
  --third_button_background_light: transparent;
  --third_button_text_light: #0F1419;
  --third_button_border_light: #CFD9DE;
  --card_background_light:#FEFAF7;
  /* --------------------- End Light theme --------------------- */

  /* --------------------- Dark theme --------------------- */
  --primary_color_dark: #DC6C14;
  --secondary_color_dark: #A7CCE3;
  --text_placeholder_dark:#7A7A81;
  --background-color_dark: #1E1B1E;

  /* text color */
  --subtext_color_dark: #CED9E9;
  --subtext2_color_dark:#CED9E9;
  --text_color_dark:#F7F9FF;
  --paragraph_text_dark: #F7F9FF;
  --error_text_dark: #f98a68;

  /* input color */
  --input_background_dark: #3A3841;
  --input_color_border_dark: #DC6C14;
  
  /* button */
  --primary_button_background_dark:#DC6C14;
  --primary_button_text_dark:#FFFFFF;
  --secondary_button_background_dark: #EFF3F4;
  --secondary_button_text_dark: #0F1419;
  --third_button_background_dark: transparent;
  --third_button_text_dark: #FFFFFF;
  --third_button_border_dark: #536471;
  --card_background_dark:#3B353B;  
  /* --------------------- End Dark theme --------------------- */

  --font-family: 'Open Sans';

  --font-size-ssm: clamp(0.64rem, 0.05vw + 0.63rem, 0.67rem);
  --font-size-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
  --font-size-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
  --font-size-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
  --font-size-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
  --font-size-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
  --font-size-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
  --font-size-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);
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

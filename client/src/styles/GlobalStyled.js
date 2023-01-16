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
  --background-color_light: #ffffff;
  
  /* modal */
  --background-color_modal_light: #ffff;
  --shadow-color_modal_dark: #919191;

  /* text color */
  --subtext_color_light: #626C7A;
  --subtext2_color_light:#46515C;
  /* --text_color_light:#323337; */
  --text_color_light: #0F1419;
  --paragraph_text_light: #0F1419;
  --error_text_light: #c61124;

  /* input color */
  --input_background_light:#EDEDEE;
  --input_color_border: #626577;
  --input_home_background_light: #F2F2F2;
  --input_home_color_light: #0F1419;
  --input_home_border_light: #DC6C14;

  /* button color */
  /* primary button */
  --primary_button_background_light:#DC6C14;
  --primary_button_text_light: #FEFAF7;
  /* secondary button */
  --secondary_button_text_light: #FEFAF7;
  --secondary_button_background_light: #0F1419;
  --secondary_button_background_hover_light: #272c30;
  /* third button */
  --third_button_background_light: transparent;
  --third_button_text_light: #0F1419;
  --third_button_border_light: #CFD9DE;
  --third_button_background_hover_light: #e6e6e6;
  /* forth button */
  --forth_button_background_light: transparent;
  --forth_button_background_hover_light: #fac8a1;
  --forth_button_text_light: #626C7A;
  --forth_button_text_active_light: #DC6C14;
  --forth_button_text_hover_light: #DC6C14;
  /* retweet */
  --retweet_color_light: #626C7A;
  --retweet_color_active_light: #00bb7d;
  --retweet_color_hover_light: #00bb7d;
  --retweet_background_hover_light: #dcf1ea;
  /* favorite */
  --favorite_color_light: #626C7A;
  --favorite_color_active_light: #f91980;
  --favorite_color_hover_light: #f91980;
  --favorite_background_hover_light: #ffe7f3;
   /* warning button */
   --warning_button_background_light: transparent;
  --warning_button_text_light: #C61124;
  --warning_button_border_light: #C61124;
  --warning_button_background_hover_light: transparent;

  // Pseudo
  --primary_pseudo_background_light: var(--background-color_light);
  --primary_pseudo_shadow_light: rgba(203, 200, 198, 0.7);
  /* --primary_pseudo_background_light: #0F1419; */

  --card_background_light:#FEFAF7;

  /* divider */
  --divider_color_light: #eff3f4;
  /* --------------------- End Light theme --------------------- */

  /* --------------------- Dark theme --------------------- */
  --primary_color_dark: #DC6C14;
  --secondary_color_dark: #A7CCE3;
  --text_placeholder_dark:#7A7A81;
  --background-color_dark: #000000;

  /* modal color */
  --background-color_modal_dark: #000000;
  --shadow-color_modal_dark: #5E5E5E;

  /* text color */
  --subtext_color_dark: #CED9E9;
  --subtext2_color_dark:#CED9E9;
  --text_color_dark:#F7F9FF;
  --paragraph_text_dark: #F7F9FF;
  --error_text_dark: #f98a68;

  /* input color */
  --input_background_dark: #3A3841;
  --input_color_border_dark: #DC6C14;
  --input_home_background_dark: #212327;
  --input_home_color_dark: #F7F9FF;
  --input_home_border_dark: #DC6C14;
  
  /* button */
  /* primary button */
  --primary_button_background_dark:#DC6C14;
  --primary_button_text_dark:#F7F9FF;
  /* secondary button */
  --secondary_button_background_dark: #F7F9FF;
  --secondary_button_text_dark: #0F1419;
  --secondary_button_background_hover_dark: #e0e2e6;
  /* third button */
  --third_button_background_dark: transparent;
  --third_button_text_dark: #F7F9FF;
  --third_button_border_dark: #536471;
  --third_button_background_hover_dark: #3B353B;
  /* forth button */
  --forth_button_background_dark: transparent;
  --forth_button_background_hover_dark: #3B353B;
  --forth_button_text_dark: #F7F9FF;
  --forth_button_text_active_dark: #DC6C14;
  --forth_button_text_hover_dark: #DC6C14;
  /* retweet */
  --retweet_color_dark: #F7F9FF;
  --retweet_color_active_dark: #00bb7d;
  --retweet_color_hover_dark: #00bb7d;
  --retweet_background_hover_dark: #071B15;
  /* favorite */
  --favorite_color_dark: #F7F9FF;
  --favorite_color_active_dark: #f91980;
  --favorite_color_hover_dark: #f91980;
  --favorite_background_hover_dark: #200814;
  /* warning button */
  --warning_button_background_dark: transparent;
  --warning_button_text_dark: #f41000;
  --warning_button_border_dark: #f41000;
  --warning_button_background_hover_dark: transparent;

  // Pseudo
  --primary_pseudo_background_dark: var(--background-color_dark);
  /* --primary_pseudo_background_dark: #3B353B; */
  --primary_pseudo_shadow_dark: rgba(53,50,53,0.7);

  --card_background_dark:#3B353B;  

  /* divider */
  --divider_color_dark: #2f3336;
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

  /* padding */
  --horizontal-spaces: 2em;
  --vertical-nothing-spaces: 5em;
  @media screen and (max-width: 768px) {
    --horizontal-spaces: 0.5em;
    --vertical-nothing-spaces: 0.7em;
  }
}

*::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

#root{
  display: flex;
  flex-direction:row;
  min-height:100vh;
  width:100%;
  background-color:${({ theme }) => theme.body.backgroundColor};
  font-family: var(--font-family), sans-serif;
  transition: background 0.3s linear;
  }
  .app {
    width: 100%;
  }
`;

export default GlobalStyled;

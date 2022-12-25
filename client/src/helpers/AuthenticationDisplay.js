import { LOGIN_PATH, REGISTER_PATH } from '@/assets/Constant';

export const findDisplayText = (type) => {
  if (type == LOGIN_PATH) {
    return {
      mainText: 'Sign In to Recharge Direct',
      subText: "If you don't have an account you can ",
      linkText: 'register here',
      linkTo: `/${REGISTER_PATH}`
    };
  } else {
    return {
      mainText: 'Register to access our service',
      subText: 'If you already had an account you can ',
      linkText: 'login here',
      linkTo: `/${LOGIN_PATH}`
    };
  }
};
export const findGridTemplateAreas = (type, queries) => {
  if (type == LOGIN_PATH) {
    if (queries.mobile)
      return `
    "theme"
    "text"
    "image"
    "nav"
    "form"
    `;
    else if (queries.desktop)
      return `
    "nav . theme" 0.1fr
    "form image text" 1.5fr /
    1fr 1fr 1fr
    `;
    else
      return `
    "nav theme" 0.1fr
    "form image" 1fr
    "form text" 1fr /
    1fr 1fr
    `;
  } else {
    if (queries.mobile)
      return `
        "theme"
        "text"
        "image"
        "nav"
        "form"
        `;
    else if (queries.desktop)
      return `
        "nav . theme" 0.1fr
        "text image form" 1.5fr /
        1fr 1fr 1fr
        `;
    else
      return `
        "nav theme" 0.1fr
        "image form" 1fr
        "text form" 1fr /
        1fr 1fr
        `;
  }
};

export const renderPropsResponsive = (propsName, queries) => {
  switch (propsName) {
    case 'padding':
      if (queries.smallMobile) return '5em 1em';
      else if (queries.mobile) return '6em';
      else if (queries.desktop) return '5em 5.3em';
      else return '2em 3em';
  }
};

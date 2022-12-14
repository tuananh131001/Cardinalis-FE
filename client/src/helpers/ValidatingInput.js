import * as yup from 'yup';
export const displayErrorMessage = (type, errorType, ...args) => {
  let displayType = 'input';
  switch (type) {
    case 'confirmPassword':
      displayType = 'Confirm Password';
      break;
    default:
      displayType = type;
  }
  switch (errorType) {
    case 'required':
      return `Your ${displayType} is required`;
    case 'email':
      return `Your ${displayType}'s format is not valid`;
    case 'positive':
      return `Your ${displayType} can only be positive`;
    case 'integer':
      return `Your ${displayType} should be int only`;
    case 'min':
      return `Your ${displayType} must be larger or equal to ${args[0]}`;
    case 'max':
      return `Your ${displayType} must be smaller or equal to ${args[0]}`;
    case 'matches':
      return `Your ${displayType} is invalid`;
    case 'oneOf':
      return `Your ${displayType} doesn't match`;
    default:
      return `Invalid ${displayType}`;
  }
};
export const chooseInputSchema = (type) => {
  if (type == 'login') {
    return yup.object().shape({
      email: yup
        .string()
        .email(displayErrorMessage('email', 'email'))
        .required(displayErrorMessage('email', 'required')),
      password: yup.string().required(displayErrorMessage('password', 'required'))
    });
  } else {
    return yup.object().shape({
      email: yup
        .string()
        .email(displayErrorMessage('email', 'email'))
        .required(displayErrorMessage('email', 'required')),
      username: yup.string().required(displayErrorMessage('email', 'required')),
      password: yup.string().required(displayErrorMessage('password', 'required')),
    });
  }
};

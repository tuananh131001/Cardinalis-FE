export function displayRequestError(error) {
  if (error.response) {
    return error.response.data.error;
  } else {
    return error.message;
  }
}

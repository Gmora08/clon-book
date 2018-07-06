const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isEmpty = value => (value.length ? true : false);

const validatePasswords = (firstPassword, secondPassword) =>
  firstPassword === secondPassword;

const validateForm = form => {
  const errors = Object.keys(form).filter(key => form[key].isValid === false);
  if (errors.length) {
    return false;
  }
  return true;
};

export { isEmpty, validateEmail, validatePasswords, validateForm };

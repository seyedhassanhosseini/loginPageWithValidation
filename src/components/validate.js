export const validate = (data) => {

  const errors = {};

  if (!data.name.trim()) {
    errors.name = " please define user name"
  } else {
    delete errors.name;
  }

  if (!data.email.trim()) {
    errors.email = "please enter email"
  } else {
    delete errors.email;
  };

  if(!data.password) {
    errors.password = "enter password"
  } else if ( data.password.lenght < 6 ) {
    errors.password = "please pass more 6 "
  } else {
    delete errors.password;
  };

  if (data.password !== data.confirmPassword ) {
    errors.confirmPassword = "ridi"
  } else {
    delete errors.confirmPassword;
  }
}
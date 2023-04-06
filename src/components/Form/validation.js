const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNumber = /\d+/;
export default function validate(input) {
  const errors = {};

  if (!regexEmail.test(input.email)) {
    errors.email = 'el nombre de usuario tiene que ser un email valido';
  }
  if(!input.email.length){
    errors.email = 'el nombre de usuario no puede estar vacío';
  }
  if(input.email.length > 35){
    errors.email = 'el nombre de usuario no puede tener más de 35 caracteres';
  }

  if(!regexNumber.test(input.password)){
    errors.password = 'la contraseña tiene que tener al menos un número';
  }

  if(input.password.length < 6 || input.password.length > 10){
    errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres';
  }

  return errors;
}
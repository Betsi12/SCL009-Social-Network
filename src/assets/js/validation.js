import {createAccount,signIn} from "./auth.js"
import { postCreate } from "./data.js";


//Función que valida que el usuario debe ingresar un @ cuando ingresa un correo
export const validateEmail = (emailSignIn) => {
//expresión regular que simula el patron de búsqueda del correo electrónico
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(emailSignIn);
}

/*Validaciones de la función Crear cuenta()*/
//Recibe los inputs del formulario y entrega un objeto que indica si estan correctos o no :)
export const validateEachInput = (userName, userAge, userLocation, userEmail, userPassword) => {
  let result = {};
  result["name"] = true;
  result["age"] = true;
  result["location"] = true;
  result["email"] = true;
  result["password"] = true;
  if (userName === "") {
    result["name"] = false;
  }
  if (userAge === "") {
    result["age"] = false;
  }
  if (userLocation === "") {
    result["location"] = false;
  }
  if (userEmail === "" || !validateEmail(userEmail)) {
    result["email"] = false;
  }
  if (userPassword === "" || userPassword.length < 6) {
    result["password"] = false;
  }
  return result
}

// Muestra mensaje de error segun los datos del objeto computado en la funcion validateEachInput
const showErrorMsg = (errorName, errorAge, errorLocation, errorEmail, errorPassword, resultValidateEachInput) => {
  resetError(errorName, errorAge, errorLocation, errorEmail, errorPassword)
  if (!resultValidateEachInput["name"]) {
    errorName.innerHTML = `Debes ingresar un nombre.`;
  }
  if (!resultValidateEachInput["age"]) {
    errorAge.innerHTML = `Debes ingresar una edad.`;
  }
  if (!resultValidateEachInput["location"]) {
    errorLocation.innerHTML = `Debes ingresar un pais o ciudad.`;
  }
  if (!resultValidateEachInput["email"]) {
    errorEmail.innerHTML = `Debes ingresar un correo válido.`;
  }
  if (!resultValidateEachInput["password"]) {
    errorPassword.innerHTML = `Debes ingresar una contraseña con mínimo 6 caracteres.`;
  }
}

//Limpia los mensajes de error 
const resetError = (errorName, errorAge, errorLocation, errorEmail, errorPassword) => {
  errorName.innerHTML = '';
  errorAge.innerHTML = '';
  errorLocation.innerHTML = '';
  errorEmail.innerHTML = '';
  errorPassword.innerHTML = '';
}

//Valida que cada valor del objeto sea correcto :)
export const areAllValidated = (resultValidateEachInput) => {
  let result = true
  Object.values(resultValidateEachInput).forEach(value => {
    if (!value) {
      result = false;
    }
  })
  return result
}

//Crea la cuenta o muestra errores si es que los hay :)
export const validateAndCreateAccount = (errorName, errorAge, errorLocation, errorEmail, errorPassword, userName, userAge, userLocation, userEmail, userPassword) => {
  const resultValidateEachInput = validateEachInput(userName, userAge, userLocation, userEmail, userPassword);
  showErrorMsg(errorName, errorAge, errorLocation, errorEmail, errorPassword, resultValidateEachInput);
  if (areAllValidated(resultValidateEachInput)) {
    createAccount(userName, userAge, userLocation, userEmail, userPassword);
  }

}


//Validaciones de iniciar sesion

//Revisa cada input y entrega un objeto que indica si esta correcto o no
export const validateSignInInput = (userEmail,userPassword)=>{
  let result = {}
  result["email"] = true;
  result["password"] = true;
  
  if (userEmail === "" || !validateEmail(userEmail)) {
    result["email"] = false;
  }
  if (userPassword === "" || userPassword.length < 6) {
    result["password"] = false;
  }
  return result
}

//Limpia los mensajes de error 
const resetErrorSignIn = (errorEmail, errorPassword) => {
  errorEmail.innerHTML = '';
  errorPassword.innerHTML = '';
}

//Muestra mensajes de error segun los datos computados en la funcion validateSignInInput
export const showErrorMsgSignIn = (errorEmail,errorPassword,resultValidateSignInInput)=>{
  resetErrorSignIn(errorEmail,errorPassword)
  
  if (!resultValidateSignInInput["email"]) {
    errorEmail.innerHTML = `Debes ingresar un correo válido.`;
  }
  if (!resultValidateSignInInput["password"]) {
    errorPassword.innerHTML = `Debes ingresar una contraseña válida.`;
  }

}

//Logea la cuenta o muestra los errores si es que los hay
export const validateAndSignIn = (errorEmail,errorPassword,userEmail,userPassword) =>{
  const resultValidateSignInInput =  validateSignInInput(userEmail,userPassword);
  showErrorMsgSignIn(errorEmail,errorPassword,resultValidateSignInInput);
  if (areAllValidated(resultValidateSignInInput)) {
    signIn(userEmail, userPassword)
  }
}

//Validación text areas vacios de la publicacion
export const validateTextPost = (userPost,userStageDirection) =>{
  let result= {}
  result["stageDirection"] = true;
  result["post"] = true;

  if(userStageDirection === ""|| userStageDirection.length<3){
    result["stageDirection"] = false;
  }
  if(userPost === ""|| userPost.length<2){
    result["post"] = false;
  }
  return result;
}

const resetErrorPost = (errorPost,errorStageDirection) => {
  errorPost.innerHTML = "";
  errorStageDirection.innerHTML = "";
}


const showErrorMsgPost = (errorPost,errorStageDirection,resultValidateTextPost)=>{
  resetErrorPost(errorPost,errorStageDirection);

  if (!resultValidateTextPost["stageDirection"]) {
    errorStageDirection.innerHTML = `Por favor, ingresa una acotación mayor a 3 carácteres.`;
  }
  if (!resultValidateTextPost["post"]) {
  errorPost.innerHTML = `Por favor, ingresa una publicacíón mayor a dos carácteres.`;}
}

export const validateAndPost = (errorPost,errorStageDirection,userPost,userStageDirection) =>{
  const resultValidateTextPost = validateTextPost(userPost,userStageDirection);
  showErrorMsgPost(errorPost,errorStageDirection,resultValidateTextPost);
  if(areAllValidated(resultValidateTextPost)){
  postCreate(userPost,userStageDirection);
  }
}
//Validación input vacio del post
export const validatePost = (userPost) =>{
  if(userPost === ""|| userPost.length<2){
    return false;

  } else{
    return true;
  }
}

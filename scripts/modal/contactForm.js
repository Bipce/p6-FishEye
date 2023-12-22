const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const sendBtn = document.querySelector(".modal__button");
const form = document.querySelector(".modal__form");

const validate = (e) => {
  e.preventDefault();

  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value,
  };

  const isValid = [firstName, lastName, email, message].every(value => value.checkValidity());

  if (isValid) {
    console.log(user);
  }
};

sendBtn.addEventListener("click", (e) => validate(e));
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const sendBtn = document.querySelector(".modal__button");
const form = document.querySelector(".modal__form");

const validate = (e) => {
  e.preventDefault();

  if (firstName.value.length !== 0 && lastName.value.length !== 0 && email.value.length !== 0 && message.value.length !== 0) {
    console.log(`First Name: ${firstName.value}`);
    console.log(`Last Name: ${lastName.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Message: ${message.value}`);

    form.reset();
  }
};

sendBtn.addEventListener("click", (e) => validate(e));
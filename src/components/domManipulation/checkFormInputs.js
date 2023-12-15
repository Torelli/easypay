export default function checkFormInputs() {
  const formFields = document.querySelectorAll(".form-field");
  let allFilled = true;

  for (let field of formFields) {
    if (field.value == "") {
      allFilled = false;
    }
  }

  return allFilled;
}

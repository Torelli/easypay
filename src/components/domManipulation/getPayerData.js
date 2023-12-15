export default function getPayerData() {
  const inputFirstName = document.querySelector("#firstName");
  const inputLastName = document.querySelector("#lastName");
  const inputEmail = document.querySelector("#email");
  const inputCountry = document.querySelector("#country");
  const inputPhoneType = document.querySelector("#phoneType");
  const inputPhoneNumber = document.querySelector("#phoneNumber");
  const inputStreetAddress1 = document.querySelector("#streetAddress1");
  const inputStreetAddress2 = document.querySelector("#streetAddress2");
  const inputCity = document.querySelector("#city");
  const inputState = document.querySelector("#state");
  const inputZipCode = document.querySelector("#zipCode");

  let payerInfo = {
    given_name: inputFirstName.value,
    surname: inputLastName.value,
    full_name: `${inputFirstName.value} ${inputLastName.value}`,
    email_address: inputEmail.value,
    phone_type: inputPhoneType.value,
    national_number: inputPhoneNumber.value,
    address: {
      address_line_1: inputStreetAddress1.value,
      address_line_2: inputStreetAddress2.value,
      admin_area_2: inputCity.value,
      admin_area_1: inputState.value,
      postal_code: inputZipCode.value,
      country_code: inputCountry.value,
    },
  };

  return payerInfo;
}

const form = document.getElementById("form");
const phoneInput = document.getElementById("phoneNumber");

function validatePhoneNumber(phoneInput) {
  let phoneNumberPattern = /^0(6[045679][0469]){1}(\-)?(1)?[^0\D]{1}\d{6}$/;
  if(phoneInput.value.match(phoneNumberPattern)) {
    alert("Data successfully submitted!");
    return true;
  }
  else {
    alert("You used the wrong format for the phone number! The correct format is 0664-1234567");
    return false;
  }
}

if (form) {
  form.onsubmit = (e) => {
    e.preventDefault()
    validatePhoneNumber(phoneInput);
  }
}
const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", showAlert);
  function showAlert(event) {
    alert("Form successfully Submitted!");
    event.preventDefault();
  }
}
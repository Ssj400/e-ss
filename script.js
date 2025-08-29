let submitButton = document.getElementById("submit-button");
let solutionText = document.querySelector(".solution-text");

submitButton.addEventListener("click", () => {
  let password = document.getElementById("password").value;
  if (password && password == 11536200) {
    solutionText.textContent =
      "Contraseña correcta, ahora debe dirigirse al estacionamiento.";
  } else {
    solutionText.textContent = "Contraseña incorrecta";
  }
});

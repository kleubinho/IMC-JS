const form = document.getElementById("form");
const buttonCalculate = document.getElementById("calculate");

const verifyFields = () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  buttonCalculate.disabled = !(height && weight);
};

const height = document.addEventListener("input", verifyFields);
const weight = document.addEventListener("input", verifyFields);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  let imc = weight / (height * height);

  const value = document.getElementById("value");
  value.classList.add("attention");

  let description = "";
  document.getElementById("infos").classList.remove("hidden");

  if (imc <= 18.5) {
    description = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 25) {
    value.classList.remove("attention");
    value.classList.add("normal");
    description = "Peso ideal";
  } else if (imc >= 25 && imc <= 30) {
    description = "Levemente acima do peso";
  } else if (imc >= 30 && imc <= 35) {
    description = "Obesidade grau I";
  } else if (imc >= 35 && imc <= 40) {
    description = "Obesidade severa";
  } else {
    description = "Obesidade mórbida";
  }

  value.textContent = imc.toFixed(2).replace(".", ",");
  document.getElementById("description").textContent = description;
});

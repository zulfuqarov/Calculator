

const Input = document.getElementById("Inputs");
const Buttons = document.querySelector(".containerButton");

const Toplama = (a, b) => {
  return a + b;
};
const Cixma = (a, b) => {
  return a - b;
};
const Vurma = (a, b) => {
  return a * b;
};
const Bolme = (a, b) => {
  return a / b;
};

const Hesabla = (a, b, deyer) => {
  switch (deyer) {
    case "+":
      return Toplama(a, b);
    case "-":
      return Cixma(a, b);
    case "/":
      return Bolme(a, b);
    case "*":
      return Vurma(a, b);
  }
};

let birinciEd = "";
let ikinciEd = "";
let deyer = "";

const Clear = () => {
  birinciEd = "";
  ikinciEd = "";
  deyer = "";
  total = "";
  Input.value = "";
};

Buttons.addEventListener("click", (event) => {
  ButtonText = event.target.innerText;

  const operator = ["+", "-", "*", "/"];
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  if (ButtonText === "=" && birinciEd && ikinciEd) {
    birinciEd = Hesabla(Number(birinciEd), Number(ikinciEd), deyer);
    Input.value = birinciEd;
    ikinciEd = "";
    deyer = "";
    return;
  }
  if (ButtonText === deyer && birinciEd && ikinciEd) {
    birinciEd = Hesabla(Number(birinciEd), Number(ikinciEd), deyer);
    Input.value = birinciEd;
    ikinciEd = "";
    return;
  }

  if (ButtonText === "C") {
    Clear();
    return;
  }

  if (operator.includes(ButtonText) && !birinciEd) {
    return;
  } else {
    if (operator.includes(ButtonText)) {
      deyer = ButtonText;
      Input.value = deyer;
    } else if (!deyer) {
      if (ButtonText !== "=") {
        birinciEd += ButtonText;
        Input.value = birinciEd;
      }
    } else {
      if (ButtonText !== "=") {
        ikinciEd += ButtonText;
        Input.value = ikinciEd;
      }
    }
  }
});

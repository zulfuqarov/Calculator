
const Buttons = document.querySelector(".containerButton");
const Input = document.getElementById("Inputs");

const Toplama = (a, b) => {
  return a + b;
};
const Cixma = (a, b) => {
  return a - b;
};
const Bolme = (a, b) => {
  return a / b;
};
const Vurma = (a, b) => {
  return a * b;
};

const Hesabla = (a, b, emeliyat) => {
  switch (emeliyat) {
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
let total = "";

Buttons.addEventListener("click", (event) => {
  const Clear = () => {
    birinciEd = "";
    ikinciEd = "";
    deyer = "";
    total = "";
    Input.value = "";
  };
  ButtonText = event.target.innerText;

  if (event.target.tagName !== "BUTTON") {
    return;
  }

  if (ButtonText === "C") {
    Clear();
    return;
  }

  if (["+", "-", "*", "/"].includes(ButtonText) && !birinciEd) {
    return;
  } else if (["+", "-", "*", "/"].includes(ButtonText) && birinciEd) {
    deyer = ButtonText;
    Input.value = ButtonText;
    if (!deyer) {
      if (ButtonText !== "=") {
        total += ButtonText;
        Input.value = total;
      }
    }
  }

  if (ButtonText === "=" && birinciEd && ikinciEd && deyer) {
    birinciEd = Hesabla(Number(birinciEd), Number(ikinciEd), deyer);
    Input.value = birinciEd;
    ikinciEd = "";
    deyer = "";
    return;
  }

  if (["+", "-", "*", "/"].includes(ButtonText)) {
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
});

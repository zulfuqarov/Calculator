// const Buttons = document.querySelector(".containerButton");
// const Input = document.getElementById("Inputs");
// const Toplama = (a, b) => {
//   return a + b;
// };

// const Cixma = (a, b) => {
//   return a - b;
// };

// const Bolme = (a, b) => {
//   return a / b;
// };

// const Vurma = (a, b) => {
//   return a * b;
// };

// const Hesabla = (a, b, deyer) => {
//   switch (deyer) {
//     case "+":
//       return Toplama(a, b);
//     case "-":
//       return Cixma(a, b);
//     case "/":
//       return Bolme(a, b);
//     case "*":
//       return Vurma(a, b);
//     default:
//       console.log("bele bir emeliyat movcud deyil :(");
//   }
// };

// let birinciEd = "";
// let ikinciEd = "";
// let deyer = "";
// let total = "";

// const Clear = () => {
//   // birinciEd = "";
//   ikinciEd = "";
//   deyer = "";
// };

// Buttons.addEventListener("click", (parametr) => {
//   const button = parametr.target.innerText;
//   if (parametr.target.tagName !== "BUTTON") {
//     return;
//   }

//   if (button === "C") {
//     total = "";
//     birinciEd = "";
//     Input.value = "";
//     Clear();
//     return;
//   }

//   if (["+", "-", "*", "/"].includes(button) && !birinciEd) {
//     Input.value = "";
//     Clear();
//     return;
//   } else if (["+", "-", "*", "/"].includes(button)) {
//     deyer = button;
//     Input.value = deyer;
//     if (deyer) {
//       total += button;
//       Input.value = total;
//     }
//   }

//   if (button === "=" && birinciEd && ikinciEd) {
//     birinciEd = Hesabla(Number(birinciEd), Number(ikinciEd), deyer);
//     Input.value = birinciEd;
//     Clear();
//     return;
//   } else if (button === "=" && birinciEd && total) {
//     birinciEd = Hesabla(Number(birinciEd), Number(total), deyer);
//     Input.value = birinciEd;
//     Clear();
//   }

//   if (["+", "-", "*", "/"].includes(button)) {
//     deyer = button;
//     Input.value = button;
//   } else if (!deyer) {
//     birinciEd += button;
//     Input.value += button;
//   } else {
//     ikinciEd += button;
//     Input.value = "";
//     Input.value += ikinciEd;
//   }
// });

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

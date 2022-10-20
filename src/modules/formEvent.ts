// Aula 03
import { cardNumberMasked, expirationDateMasked, securityCodeMasked } from "./formMasks";
import { setCardType } from "./setCardType";

export const addButton = document.querySelector("#add-card");
export const cardHolder = document.querySelector("#card-holder");
document.querySelector("form")?.addEventListener("submit", (event) => event.preventDefault());

addButton?.addEventListener("click", () => {
  alert("Cartão adicionado!");
});

cardHolder?.addEventListener("input", () => {
  const ccHolder: any = document.querySelector(".cc-holder > .value");

  ccHolder.innerHTML = cardHolder.value.length === 0 ? "FULANO DA SILVA" : cardHolder.value;
});

securityCodeMasked.on("accept", () => {
  updatedSecurityCode(securityCodeMasked.value);
});

function updatedSecurityCode(code: string | number | any) {
  const ccSecurity: any = document.querySelector(".cc-security .value");

  ccSecurity.innerHTML = code.length === 0 ? "123" : code;
}

cardNumberMasked.on("accept", () => {
  const cardType = cardNumberMasked.masked.currentMask.cardtype;
  setCardType(cardType);
  updatedCardNumber(cardNumberMasked.value);
});

function updatedCardNumber(number: string | number | any) {
  const ccNumber: any = document.querySelector(".cc-info .cc-number");

  ccNumber.innerHTML = number.length === 0 ? "1234 5678 9012 3456" : number;
}

expirationDateMasked.on("accept", () => {
  updatedExpirationDate(expirationDateMasked.value);
});

function updatedExpirationDate(date: string | number | any) {
  const ccExpiration: any = document.querySelector(".cc-extra .cc-expiration .value");

  ccExpiration.innerHTML = date.length === 0 ? "02/32" : date;
}

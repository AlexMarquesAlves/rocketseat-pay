// Aula 02
import IMask, { MaskElement } from "imask";

const securityCode: MaskElement | any = document.querySelector("#security-code");
const securityCodePattern = {
  mask: "000",
};
export const securityCodeMasked = IMask(securityCode, securityCodePattern);

const expirationDate: MaskElement | any = document.querySelector("#expiration-date");
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
};
export const expirationDateMasked = IMask(expirationDate, expirationDatePattern);

const cardNumber: MaskElement | any = document.querySelector("#card-number");
const cardNumberPattern = {
  // mask: cardsDynamicMasks,
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardtype: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardtype: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default",
    },
  ],
  dispatch: function (appended: any, dynamicMasked: { value: any; compiledMasks: any[] }) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "");
    const foundMask = dynamicMasked.compiledMasks.find(function (item: { regex: number }) {
      return number.match(item.regex);
    });

    return foundMask;
  },
};
export const cardNumberMasked = IMask(cardNumber, cardNumberPattern);

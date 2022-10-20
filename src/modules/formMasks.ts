// Aula 02
import IMask, { MaskElement } from "imask";

export const securityCode: MaskElement | any = document.querySelector("#security-code");
export const securityCodePattern = {
  mask: "000",
};
export const securityCodeMasked = IMask(securityCode, securityCodePattern);

export const expirationDate: MaskElement | any = document.querySelector("#expiration-date");
export const expirationDatePattern = {
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

export const cardNumber: MaskElement | any = document.querySelector("#card-number");
export const cardNumberPattern: any = {
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
    // Adicionais
    {
      mask: "0000 000000 00000",
      regex: /^3[47]\d{0,13}/,
      cardtype: "american express",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
      cardtype: "discover",
    },
    {
      mask: "0000 000000 0000",
      regex: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
      cardtype: "diners",
    },
    {
      mask: "0000 000000 00000",
      regex: /^(?:2131|1800)\d{0,11}/,
      cardtype: "jcb15",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^(?:35\d{0,2})\d{0,12}/,
      cardtype: "jcb",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
      cardtype: "maestro",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^62\d{0,14}/,
      cardtype: "unionpay",
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

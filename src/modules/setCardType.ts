// Aula 01
export const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path");
export const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path");
export const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img");

export function setCardType(type: string) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["#000", "#CCC"],
  } as any;

  ccBgColor01?.setAttribute("fill", colors[type][0]);
  ccBgColor02?.setAttribute("fill", colors[type][1]);

  ccLogo?.setAttribute("src", `cc-${type}.svg`);
}

// globalThis.setCardType = setCardType;

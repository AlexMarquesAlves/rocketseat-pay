export const cardHolder = document.querySelector("#card-holder");

cardHolder.addEventListener("input", () => {
  const ccHolder = document.querySelector(".cc-holder .value");

  ccHolder.innerHTML = cardHolder.value.length === 0 ? "FULANO DA SILVA" : cardHolder.value;
});

import handleStep from "../handleStep.js";

const createFormulaCard = (formula) => {
  const card = document.createElement("div");
  card.role = "button";
  card.classList.add("stack--product-card");
  card.classList.add("stack--formula-card");
  const image = document.createElement("img");
  image.loading = "lazy";
  image.src = formula.image;
  const h3 = document.createElement("h3");
  h3.classList.add("stack--product-card__formula-title");
  h3.innerHTML = formula.name;
  h3.style.marginBottom = "8px";
  const fakeButton = document.createElement("div");
  fakeButton.classList.add("stack--product-card__add-button");
  fakeButton.style.marginTop = "auto";
  fakeButton.innerHTML = "Select";

  card.addEventListener("click", () => {
    handleStep();
    localStorage.setItem("stack_choosen_formula", formula.id);
    document.querySelector(`[formula-id='${formula.id}']`).classList.add("stack--active");
  });

  card.appendChild(image);
  card.appendChild(h3);
  card.appendChild(fakeButton);
  return card;
};

export default createFormulaCard;

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

  card.addEventListener("click",()=>{
    handleStep();
    localStorage.setItem("stack_choosen_formula",formula.id);
    document.querySelector(`[formula-id='${formula.id}']`).classList.add("stack--active")
  })

  card.appendChild(image);
  card.appendChild(h3);
  return card;
};

export default createFormulaCard;

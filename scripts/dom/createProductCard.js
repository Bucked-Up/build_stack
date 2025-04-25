import handleProductAdded from "../handleProductAdded.js";
import handleRemoveButton from "../handleRemoveButton.js";
import createCardBase from "./createCardBase.js";
import createSelectedProduct from "./createSelectedProduct.js";

const createProductCard = ({ prod, value }) => {
  const handleAddButton = (button) => {
    button.addEventListener("click", () => {
      const array = JSON.parse(localStorage.getItem("stack_products"));
      const isStack = !array || array?.length < 3;
      handleProductAdded({ prod, value });
      createSelectedProduct({ prod, value, isStack });
    });
  };

  const card = createCardBase({ prod, value });
  const button = document.createElement("button");
  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add("stack--product-card__buttons-wrapper");
  buttonsWrapper.setAttribute("prod_id", prod.id);
  buttonsWrapper.setAttribute("value", value?.id);
  button.classList.add("stack--product-card__add-button");
  buttonsWrapper.appendChild(button);

  const addRemoveButtonsWrapper = document.createElement("div");
  addRemoveButtonsWrapper.classList.add("stack--product-card__add-remove-buttons-wrapper");
  const addButton = document.createElement("button");
  addButton.innerHTML = "+";
  addButton.classList.add("stack--product-card__add-remove-buttons-wrapper__button");
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "-";
  removeButton.classList.add("stack--product-card__add-remove-buttons-wrapper__button");
  const quantityCounter = document.createElement("span");
  quantityCounter.innerHTML = "0";

  addRemoveButtonsWrapper.appendChild(removeButton);
  addRemoveButtonsWrapper.appendChild(quantityCounter);
  addRemoveButtonsWrapper.appendChild(addButton);
  buttonsWrapper.appendChild(addRemoveButtonsWrapper);
  button.innerHTML = "+ ADD";
  button.type = "button";
  handleAddButton(button);
  handleAddButton(addButton);
  handleRemoveButton({ prod, value, button: removeButton });
  card.appendChild(buttonsWrapper);
  return card;
};

export default createProductCard;

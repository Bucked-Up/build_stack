import handleProductAdded from "../handleProductAdded.js";
import createCardBase from "./createCardBase.js";
import createSelectedProduct from "./createSelectedProduct.js";

const createProductCard = ({ prod, value }) => {
  const handleAddButton = (button) => {
    button.addEventListener("click", () => {
      handleProductAdded({ prod, value });
      createSelectedProduct({ prod, value });
    });
  };

  const card = createCardBase({ prod, value });
  const button = document.createElement("button");
  button.classList.add("stack--product-card__add-button");
  if((value && !value.in_stock) || (!value && prod.stock['[]'] <=0)){
    button.innerHTML = "OUT OF STOCK"
    button.setAttribute("disabled","disabled")
  }else
  button.innerHTML = "+ ADD";
  button.type = "button";
  handleAddButton(button);
  card.appendChild(button);
  return card;
};

export default createProductCard;

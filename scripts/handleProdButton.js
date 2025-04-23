const handleProdButton = ({ prod, value, isRemoving }) => {
  const wrapper = document.querySelector(`.stack--product-card__buttons-wrapper[prod_id='${prod.id}'][value='${value?.id}']`);
  const counter = wrapper.querySelector("span");
  const addRemoveWrapper = wrapper.querySelector(".stack--product-card__add-remove-buttons-wrapper");
  const button = wrapper.querySelector(".stack--product-card__add-button");
  if (isRemoving) {
    const quantity = +counter.innerHTML - 1;
    counter.innerHTML = quantity;
    if (quantity === 0) {
      addRemoveWrapper.style = "";
      button.style = "";
    }
  } else {
    const quantity = +counter.innerHTML + 1;
    counter.innerHTML = quantity;
    addRemoveWrapper.style.display = "flex";
    button.style.display = "none";
  }
};

export default handleProdButton;

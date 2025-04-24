const handleProdButton = ({ prod, value, isRemoving }) => {
  const wrapper = document.querySelector(`.stack--product-card__buttons-wrapper[prod_id='${prod.id}'][value='${value?.id}']`);
  const counter = wrapper.querySelector("span");
  if (isRemoving) {
    const quantity = +counter.innerHTML - 1;
    counter.innerHTML = quantity;
    if (quantity === 0) {
      wrapper.classList.remove("stack--show-add-remove-wrapper")
    }
  } else {
    const quantity = +counter.innerHTML + 1;
    counter.innerHTML = quantity;
    wrapper.classList.add("stack--show-add-remove-wrapper")
  }
};

export default handleProdButton;

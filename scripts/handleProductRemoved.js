import handlePrice from "./handlePrice.js";

const handleProductRemoved = async ({ prod, value }) => {
  const currentProducts = await JSON.parse(localStorage.getItem("stack_selected_products"));
  handlePrice({ prod, value, isRemoving: true });
  const indexToRemove = currentProducts.findIndex((item) => item.prod.id === prod.id && item.value?.id === value?.id);
  if (indexToRemove !== -1) {
    currentProducts.splice(indexToRemove, 1);
    localStorage.setItem("stack_selected_products", JSON.stringify(currentProducts));
  }
};

export default handleProductRemoved;

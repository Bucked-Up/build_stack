import handlePrice from "./handlePrice.js";

const handleProductRemoved = async ({ prod, value }) => {
  const currentProducts = await JSON.parse(localStorage.getItem("stack_selected_products"));
  handlePrice({ prod, value, isRemoving: true });
  const updatedProducts = currentProducts.filter((item) => !(item.prod.id === prod.id && item.value?.id === value?.id));
  localStorage.setItem("stack_selected_products", JSON.stringify(updatedProducts));
};

export default handleProductRemoved;

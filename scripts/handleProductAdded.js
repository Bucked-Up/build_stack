import handlePrice from "./handlePrice.js";

const handleProductAdded = async ({ prod, value }) => {
  const currentProducts = await JSON.parse(localStorage.getItem("stack_selected_products"));
  handlePrice({ prod, value });
  if (!currentProducts) {
    localStorage.setItem("stack_selected_products", JSON.stringify([{ prod, value }]));
  } else {
    localStorage.setItem("stack_selected_products", JSON.stringify([...currentProducts, { prod, value }]));
  }
};

export default handleProductAdded;

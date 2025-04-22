import createSelectedProduct from "./dom/createSelectedProduct.js";

const handleInit = async () => {
  const currentProducts = await JSON.parse(localStorage.getItem("stack_selected_products"));
  if (currentProducts)
    currentProducts.forEach((item) => {
      createSelectedProduct({ prod: item.prod, value: item.value });
    });
};

export default handleInit;

import createSelectedProduct from "./dom/createSelectedProduct.js";
import handlePrice from "./handlePrice.js";
import handleProdButton from "./handleProdButton.js";

const handleInit = async () => {
  const currentProducts = await JSON.parse(localStorage.getItem("stack_selected_products"));
  if (currentProducts)
    currentProducts.forEach((item) => {
      handlePrice({ prod: item.prod, value: item.value });
      createSelectedProduct({ prod: item.prod, value: item.value });
      handleProdButton({ prod: item.prod, value: item.value })
    });
};

export default handleInit;

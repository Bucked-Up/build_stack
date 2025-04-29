import createSelectedProduct from "./dom/createSelectedProduct.js";
import handlePrice from "./handlePrice.js";
import handleProdButton from "./handleProdButton.js";
import handleStep from "./handleStep.js";

const handleInit = () => {
  const currentStackProducts = JSON.parse(localStorage.getItem("stack_products"));
  const currentExcessProducts = JSON.parse(localStorage.getItem("stack_excess_products"));
  const choosenFormula = localStorage.getItem("stack_choosen_formula")
  if(choosenFormula){
    document.querySelector(`[formula-id='${choosenFormula}']`).classList.add("stack--active")
    handleStep();
  }
  if (currentStackProducts){
    currentStackProducts.forEach((item) => {
      handleStep();
      createSelectedProduct({ prod: item.prod, value: item.value, isStack: true });
      handlePrice({ prod: item.prod, value: item.value, isStack: true });
    });
  }
  if (currentExcessProducts)
    currentExcessProducts.forEach((item) => {
      createSelectedProduct({ prod: item.prod, value: item.value });
      handleProdButton({ prod: item.prod, value: item.value });
      handlePrice({ prod: item.prod, value: item.value });
    });
};

export default handleInit;

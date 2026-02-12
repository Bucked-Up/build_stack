import handlePrice from "./handlePrice.js";
import handleProdButton from "./handleProdButton.js";
import handleStep from "./handleStep.js";

const handleProductAdded = ({ prod, value }) => {
  const handleLocalStorage = ({ products, name }) => {
    if (!products) {
      localStorage.setItem(name, JSON.stringify([{ prod, value }]));
    } else {
      localStorage.setItem(name, JSON.stringify([...products, { prod, value }]));
    }
  };
  const currentStackProducts = JSON.parse(localStorage.getItem("stack_productsv2"));
  const currentExcessProducts = JSON.parse(localStorage.getItem("stack_excess_productsv2"));
  if (currentStackProducts?.length === 3) {
    handleLocalStorage({ products: currentExcessProducts, name: "stack_excess_productsv2" });
    handleProdButton({ prod, value });
    handlePrice({ prod, value });
  } else {
    handleLocalStorage({ products: currentStackProducts, name: "stack_productsv2" });
    handleStep();
    handlePrice({ prod, value, isStack: true });
  }
};

export default handleProductAdded;

import handlePrice from "./handlePrice.js";
import handleProdButton from "./handleProdButton.js";
import handleStep from "./handleStep.js";

const handleProductRemoved = ({ prod, value, isStack }) => {
  const handleLocalStorage = ({ products, name }) => {
    const indexToRemove = products.findIndex((item) => item.prod.id === prod.id && item.value?.id === value?.id);
    products.splice(indexToRemove, 1);
    localStorage.setItem(name, JSON.stringify(products));
  };
  if (isStack) {
    handleStep(true);
    const currentStackProducts = JSON.parse(localStorage.getItem("stack_productsv2"));
    handleLocalStorage({ products: currentStackProducts, name: "stack_productsv2" });
    handlePrice({ prod, value, isRemoving: true, isStack: true });
  } else {
    const currentExcessProducts = JSON.parse(localStorage.getItem("stack_excess_productsv2"));
    handleProdButton({ prod, value, isRemoving: true });
    handleLocalStorage({ products: currentExcessProducts, name: "stack_excess_productsv2" });
    handlePrice({ prod, value, isRemoving: true });
  }
};

export default handleProductRemoved;

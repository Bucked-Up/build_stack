import handlePrice from "./handlePrice.js";
import handleProdButton from "./handleProdButton.js";
import handleStep from "./handleStep.js";

const handleProductRemoved = ({ prod, value, isStack }) => {
  const handleLocalStorage = ({ products, name }) => {
    const indexToRemove = products.findIndex((item) => item.prod.id === prod.id && item.value?.id === value?.id);
    products.splice(indexToRemove, 1);
    localStorage.setItem(name, JSON.stringify(products));
  };
  handlePrice({ prod, value, isRemoving: true });
  if (isStack) {
    handleStep(true)
    const currentStackProducts = JSON.parse(localStorage.getItem("stack_products"));
    handleLocalStorage({products: currentStackProducts, name: "stack_products"})
  } else {
    const currentExcessProducts = JSON.parse(localStorage.getItem("stack_excess_products"));
    handleProdButton({ prod, value, isRemoving: true });
    handleLocalStorage({products: currentExcessProducts, name: "stack_excess_products"})
  }
};

export default handleProductRemoved;

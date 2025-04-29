import removeCard from "./dom/removeCard.js";
import handleProductRemoved from "./handleProductRemoved.js";
import handleStep from "./handleStep.js";

const handleGoBackButton = () => {
  const button = document.querySelector(".stack--go-back");
  button.addEventListener("click", () => {
    const products = JSON.parse(localStorage.getItem("stack_products"));
    if (!products || products.length === 0) {
      localStorage.removeItem("stack_choosen_formula")
      document.querySelector(`[formula-id].stack--active`).classList.remove("stack--active")
      handleStep(true);
      return
    }
    const { prod, value } = products[products.length - 1];
    handleProductRemoved({ prod: prod, value: value, isStack: true });
    removeCard({ prod, value, isStack: true });
  });
};

export default handleGoBackButton;

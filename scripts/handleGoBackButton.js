import removeCard from "./dom/removeCard.js";
import handleProductRemoved from "./handleProductRemoved.js";

const handleGoBackButton = () => {
  const button = document.querySelector(".stack--go-back");
  button.addEventListener("click", () => {
    const { prod, value } = JSON.parse(localStorage.getItem("stack_products"))[0];
    handleProductRemoved({ prod: prod, value: value, isStack: true });
    removeCard({ prod, value, isStack: true })
  });
};

export default handleGoBackButton;

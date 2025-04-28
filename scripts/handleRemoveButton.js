import removeCard from "./dom/removeCard.js";
import handleProductRemoved from "./handleProductRemoved.js";



const handleRemoveButton = ({ prod, value, button, isStack }) => {
  const handleClick = () => {
    handleProductRemoved({ prod, value, isStack });
    removeCard({ prod, value, isStack })
  };

  button.addEventListener("click", handleClick);
};

export default handleRemoveButton;

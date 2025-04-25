const round = (num) => Math.round(num * 100) / 100;
const getProdPrice = (prod) => round(parseFloat(prod.price.split("$")[1]) + parseFloat(prod.value?.price?.split("$")[1] || 0));

let stackDiscount = 0;
let excessDiscount = 0;
let stackTotal = 0;
let excessTotal = 0;

const handlePrice = async ({ prod, value, isRemoving, isStack }) => {
  const leftToUnlockText = document.querySelector(".stack--left-to-unlock");
  const hasStack = JSON.parse(localStorage.getItem("stack_products")).length === 3;

  const subTotalDom = document.querySelector("[subtotal]");
  const discountDom = document.querySelector("[discount]");
  const totalDom = document.querySelector("[total]");

  if (isStack) {
    if (!isRemoving) {
      leftToUnlockText.classList.add("stack--active");
      stackTotal = stackTotal + getProdPrice(prod);
      if (hasStack) {
        stackDiscount = stackTotal - 99.99;
      }
    } else {
      leftToUnlockText.classList.remove("stack--active");
      stackTotal = stackTotal - getProdPrice(prod);
      stackDiscount = 0;
    }
  } else {
    excessTotal = isRemoving ? excessTotal - getProdPrice(prod) : excessTotal + getProdPrice(prod);
    excessDiscount = 0.2 * excessTotal;
  }

  discountDom.innerHTML = `$${(stackDiscount + excessDiscount).toFixed(2)}`;
  subTotalDom.innerHTML = `$${(stackTotal + excessTotal).toFixed(2)}`;
  totalDom.innerHTML = `$${(stackTotal + excessTotal - stackDiscount - excessDiscount).toFixed(2)}`;
};

export default handlePrice;

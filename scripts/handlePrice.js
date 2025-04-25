const round = (num) => Math.round(num * 100) / 100;
const getProdPrice = (prod, value) => round(parseFloat(prod.price.split("$")[1]) + parseFloat(value?.price?.split("$")[1] || 0));

let stackDiscount = 0;
let excessDiscount = 0;
let stackTotal = 0;
let excessTotal = 0;
let stackUpcharge = 0;

const handlePrice = async ({ prod, value, isRemoving, isStack }) => {
  const hasStack = JSON.parse(localStorage.getItem("stack_products")).length === 3;

  const subTotalDom = document.querySelector("[subtotal]");
  const discountDom = document.querySelector("[discount]");
  const totalDom = document.querySelector("[total]");

  if (isStack) {
    if (!isRemoving) {
      if (hasStack) document.body.classList.add("has-full-stack");
      stackUpcharge = stackUpcharge + prod.upcharge;
      stackTotal = stackTotal + getProdPrice(prod, value);
      if (hasStack) {
        stackDiscount = stackTotal - 99.99 - stackUpcharge;
      }
    } else {
      document.body.classList.remove("has-full-stack");
      stackUpcharge = stackUpcharge - prod.upcharge;
      stackTotal = stackTotal - getProdPrice(prod, value);
      stackDiscount = 0;
    }
  } else {
    excessTotal = isRemoving ? excessTotal - getProdPrice(prod, value) : excessTotal + getProdPrice(prod, value);
    excessDiscount = 0.2 * excessTotal;
  }

  discountDom.innerHTML = `$${(stackDiscount + excessDiscount).toFixed(2)}`;
  subTotalDom.innerHTML = `$${(stackTotal + excessTotal).toFixed(2)}`;
  totalDom.innerHTML = `$${(stackTotal + excessTotal - stackDiscount - excessDiscount).toFixed(2)}`;
};

export default handlePrice;

const round = (num) => Math.round(num * 100) / 100;

const handlePrice = async ({ prod, value, isRemoving, isStack }) => {
  const leftToUnlockText = document.querySelector(".stack--left-to-unlock");
  const hasStack = JSON.parse(localStorage.getItem("stack_products")).length === 3;

  const subTotalDom = document.querySelector("[subtotal]");
  const discountDom = document.querySelector("[discount]");
  const total = document.querySelector("[total]");
  let discount = 0;

  const currentPrice = parseFloat(subTotalDom.innerHTML.split("$")[1]);
  const productPrice = round(parseFloat(prod.price.split("$")[1]) + parseFloat(value?.price?.split("$")[1] || 0));
  const subtotal = isRemoving ? round(currentPrice - productPrice) : round(currentPrice + productPrice);

  if (isStack && !isRemoving && hasStack) {
    discount = subtotal - 99;
    localStorage.setItem("stack_discount", discount);
  } else if (!isStack && !isRemoving && hasStack) {
      const productDiscount = (20 / 100) * productPrice;
      const excessDiscount = (+localStorage.getItem("excess_discount") || 0) + productDiscount;
      localStorage.setItem("excess_discount", excessDiscount);
      discount = +localStorage.getItem("stack_discount") + excessDiscount;
  }
  subTotalDom.innerHTML = `$${subtotal.toFixed(2)}`;
  discountDom.innerHTML = `$${discount.toFixed(2)}`;
  total.innerHTML = `$${round(subtotal - discount).toFixed(2)}`;

  if (hasStack) leftToUnlockText.classList.add("stack--active");
  else leftToUnlockText.classList.remove("stack--active");
};

export default handlePrice;

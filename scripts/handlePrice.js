const round = (num) => Math.round(num * 100) / 100;

const handlePrice = async ({ prod, value, isRemoving }) => {
  const currentValueDom = document.querySelector("[current-value]");
  const range = document.querySelector(".stack--price-range-wrapper__range span");
  const leftToUnlockText = document.querySelector(".stack--left-to-unlock");

  const subtotal = document.querySelector("[subtotal]");
  const discount = document.querySelector("[discount]");
  const total = document.querySelector("[total]");
  const goalValueDom = document.querySelector("[goal-value]");
  let discountValue = 0;

  const price = round(parseFloat(prod.price.split("$")[1]) + parseFloat(value?.price?.split("$")[1] || 0));
  const currentPrice = parseFloat(currentValueDom.innerHTML.split("$")[1]);
  const newPrice = isRemoving ? round(currentPrice - price) : round(currentPrice + price);
  currentValueDom.innerHTML = `$${newPrice}`;
  let newWidth = (newPrice / 100) * 100;
  newWidth = newWidth > 100 ? 100 : newWidth <= 0 ? 0 : newWidth - 10;

  if (newPrice > 0) {
    leftToUnlockText.classList.add("stack--active");
  } else {
    leftToUnlockText.classList.remove("stack--active");
  }

  const valueLeft = round(100 - newPrice);
  if (newPrice < 100) {
    leftToUnlockText.innerHTML = `There is $${valueLeft} left to unlock the stack and activate the discount.`;
    goalValueDom.style = "";
  } else {
    goalValueDom.style.display = "none";
    discountValue = newPrice > 100 ? round((20 / 100) * (newPrice - 100)) : 0;
    leftToUnlockText.innerHTML = newPrice > 100
      ? `<span>Stack unlocked.</span> You saved $${discountValue} with 20% off overage.`
      : leftToUnlockText.innerHTML;
  }

  range.style.width = `${newWidth}%`;
  subtotal.innerHTML = `$${newPrice}`;
  discount.innerHTML = `$${discountValue}`;
  total.innerHTML = `$${round(newPrice - discountValue)}`;
};

export default handlePrice;

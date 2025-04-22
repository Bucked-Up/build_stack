const round = (num) => Math.round(num * 100) / 100;

const handlePrice = async ({ prod, value, isRemoving }) => {
  const currentValueDom = document.querySelector("[current-value]");
  const range = document.querySelector(".stack--price-range-wrapper__range span");
  const leftToUnlockText = document.querySelector(".stack--left-to-unlock");

  const subtotal = document.querySelector("[subtotal]");
  const discount = document.querySelector("[discount]");
  const total = document.querySelector("[total]");
  let discountValue = 0;

  const price = round(parseFloat(prod.price.split("$")[1]) + parseFloat(value?.price?.split("$")[1] || 0));
  const currentPrice = parseFloat(currentValueDom.innerHTML.split("$")[1]);
  const newPrice = isRemoving ? round(currentPrice - price) : round(currentPrice + price);
  currentValueDom.innerHTML = `$${newPrice}`;
  let newWidth = (newPrice / 100) * 100;
  if (newWidth > 100) newWidth = 100;
  else if (newWidth <= 0) newWidth = 0;
  else newWidth -= 10;
  if (newPrice > 0) leftToUnlockText.classList.add("stack--active");
  else leftToUnlockText.classList.remove("stack--active");
  const valueLeft = round(100 - newPrice);
  if (newPrice < 100) leftToUnlockText.innerHTML = `There is $${valueLeft} left to unlock the stack and activate the discount.`;
  else if (newPrice > 100) {
    discountValue = round((20 / 100) * (newPrice - 100));
    leftToUnlockText.innerHTML = `<span>Stack unlocked.</span> You saved $${round((20 / 100) * (newPrice - 100))} with 20% off overage.`;
  } else discountValue = 0;
  range.style.width = `${newWidth}%`;

  subtotal.innerHTML = `$${newPrice}`;
  discount.innerHTML = `$${discountValue}`;
  total.innerHTML = `$${round(newPrice - discountValue)}`
};

export default handlePrice;

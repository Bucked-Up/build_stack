const round = (num) => Math.round(num * 100) / 100;
const getProdPrice = (prod, value) => round(parseFloat(prod.price.split("$")[1]) + parseFloat(value?.price?.split("$")[1] || 0));

const createCardBase = ({ prod, value, hasFlexDiv }) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  image.loading = "lazy";
  const title = document.createElement("h3");
  const flavor = document.createElement("h4");
  card.classList.add("stack--product-card");
  title.innerHTML = `${prod.name} <span class="stack--upcharge-title">${prod.upcharge ? `(+$${prod.upcharge})` : ""}</span>`;
  if (value) {
    image.src = value.images[0];
    image.alt = value.name;
    flavor.innerHTML = value.name;
  } else {
    image.src = prod.image;
  }
  card.appendChild(image);
  if (hasFlexDiv) {
    const flexWrapper = document.createElement("div");
    flexWrapper.classList.add("stack--product-card__flex");
    const div = document.createElement("div");
    flexWrapper.appendChild(div);
    div.appendChild(title);
    if (value) div.appendChild(flavor);
    card.appendChild(flexWrapper);
  } else {
    const priceDOM = document.createElement("p");
    const newPriceDOM = document.createElement("p");
    const price = getProdPrice(prod, value);
    const newPrice = round(price - 0.2 * price).toFixed(2);
    const pricesWrapper = document.createElement("div");
    pricesWrapper.classList.add("stack--product-card__prices-wrapper");
    priceDOM.classList.add("stack--product-card__prices-wrapper__old");
    newPriceDOM.classList.add("stack--product-card__prices-wrapper__new");
    priceDOM.innerHTML = price.toFixed(2);
    newPriceDOM.innerHTML = newPrice;
    pricesWrapper.appendChild(newPriceDOM);
    pricesWrapper.appendChild(priceDOM);
    card.appendChild(title);
    if (value) card.appendChild(flavor);
    card.appendChild(pricesWrapper);
  }
  return card;
};

export default createCardBase;

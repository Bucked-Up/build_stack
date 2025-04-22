const createCardBase = ({ prod, value, hasFlexDiv }) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("h3");
  const flavor = document.createElement("h4");
  card.classList.add("stack--product-card");
  title.innerHTML = prod.name;
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
    card.appendChild(title);
    if (value) card.appendChild(flavor);
  }
  return card;
};

export default createCardBase;

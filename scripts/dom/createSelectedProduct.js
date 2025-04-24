import handleRemoveButton from "../handleRemoveButton.js";
import createCardBase from "./createCardBase.js";

const createSelectedProduct = ({ prod, value, isStack }) => {
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
  removeButton.classList.add("stack--product-card__remove-button");

  const card = createCardBase({ prod, value, hasFlexDiv: true });
  card.setAttribute("prod_id", prod.id);
  card.setAttribute("value", value?.id);
  card.querySelector(".stack--product-card__flex").appendChild(removeButton);
  handleRemoveButton({ prod, value, button: removeButton, isStack });

  if (isStack) {
    const selectedProductsWrapper = document.querySelector(".stack--selected-stack-products");
    selectedProductsWrapper.querySelector("span")?.remove();
    selectedProductsWrapper.insertBefore(card, selectedProductsWrapper.firstChild);
    return;
  }

  const selectedProductsWrapper = document.querySelector(".stack--selected-products .swiper-wrapper");
  selectedProductsWrapper.querySelector(".swiper-slide:has(span)")?.remove();
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  swiperSlide.setAttribute("prod_id", prod.id);
  swiperSlide.setAttribute("value", value?.id);
  swiperSlide.appendChild(card);
  selectedProductsWrapper.insertBefore(swiperSlide, selectedProductsWrapper.firstChild);
  window.selectedProductsSwiper.update();
};

export default createSelectedProduct;

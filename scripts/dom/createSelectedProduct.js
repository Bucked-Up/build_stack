import handleRemoveButton from "../handleRemoveButton.js";
import createCardBase from "./createCardBase.js";

const createSelectedProduct = ({ prod, value }) => {
  const selectedProductsWrapper = document.querySelector(".stack--selected-products .swiper-wrapper");
  selectedProductsWrapper.querySelector(".swiper-slide:has(span)")?.remove();
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  swiperSlide.setAttribute("prod_id", prod.id);
  swiperSlide.setAttribute("value", value?.id);
  const card = createCardBase({ prod, value, hasFlexDiv: true });
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerHTML = '<svg viewBox="0 0 17 16" fill="white" xmlns="http://www.w3.org/2000/svg"><rect x="3.75781" y="4.81812" width="2" height="11" transform="rotate(-45 3.75781 4.81812)" fill="white"/><rect x="11.5371" y="3.40381" width="2" height="11" transform="rotate(45 11.5371 3.40381)" fill="white"/></svg>';
  removeButton.classList.add("stack--product-card__remove-button");
  card.querySelector(".stack--product-card__flex").appendChild(removeButton);
  handleRemoveButton({ prod, value, button: removeButton });
  swiperSlide.appendChild(card);
  selectedProductsWrapper.insertBefore(swiperSlide, selectedProductsWrapper.firstChild);
  window.selectedProductsSwiper.update();
};

export default createSelectedProduct;

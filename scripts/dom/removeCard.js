import handleMobileDropdown from "../handleMobileDropdown.js";

const createPlaceholder = () =>{
  const placeholder = document.createElement("span");
  placeholder.classList.add("stack--placeholder")
  return placeholder
}

const createPlaceholderSwiper = () => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  const placeholder = createPlaceholder()
  const text = document.createElement("span");
  text.innerHTML = "Add More";
  placeholder.appendChild(text)
  handleMobileDropdown(placeholder)
  slide.appendChild(placeholder);
  return slide;
};

const removeCard = ({ prod, value, isStack }) => {
  if (isStack) {
    const selectedProductsWrapper = document.querySelector(".stack--selected-stack-products");
    const card = document.querySelector(`.stack--product-card[prod_id='${prod.id}'][value='${value?.id}']`);
    card.remove();
    if (selectedProductsWrapper.querySelectorAll(".stack--product-card").length < 3) selectedProductsWrapper.appendChild(createPlaceholder());
  } else {
    const selectedProductsWrapper = document.querySelector(".stack--selected-products .swiper-wrapper");
    const swiperSlide = document.querySelector(`.swiper-slide[prod_id='${prod.id}'][value='${value?.id}']`);
    swiperSlide.remove();
    if (selectedProductsWrapper.querySelectorAll(".swiper-slide").length < 4) selectedProductsWrapper.appendChild(createPlaceholderSwiper());
  }
  window.selectedProductsSwiper.update();
};

export default removeCard;

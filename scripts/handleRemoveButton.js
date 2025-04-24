import handleProductRemoved from "./handleProductRemoved.js";

const createPlaceholder = () => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.appendChild(document.createElement("span"));
  return slide;
};

const handleRemoveButton = ({ prod, value, button, isStack }) => {
  const handleClick = () => {
    handleProductRemoved({ prod, value, isStack });
    if (isStack) {
      const selectedProductsWrapper = document.querySelector(".stack--selected-stack-products");
      const card = document.querySelector(`.stack--product-card[prod_id='${prod.id}'][value='${value?.id}']`);
      card.remove();
      if (selectedProductsWrapper.querySelectorAll(".stack--product-card").length < 3) selectedProductsWrapper.appendChild(document.createElement("span"));
    } else {
      const selectedProductsWrapper = document.querySelector(".stack--selected-products .swiper-wrapper");
      const swiperSlide = document.querySelector(`.swiper-slide[prod_id='${prod.id}'][value='${value?.id}']`);
      swiperSlide.remove();
      if (selectedProductsWrapper.querySelectorAll(".swiper-slide").length < 4) selectedProductsWrapper.appendChild(createPlaceholder());
    }
    window.selectedProductsSwiper.update();
  };

  button.addEventListener("click", handleClick);
};

export default handleRemoveButton;

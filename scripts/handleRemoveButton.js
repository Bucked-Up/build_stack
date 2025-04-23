import handleProductRemoved from "./handleProductRemoved.js";

const createPlaceholder = () => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.appendChild(document.createElement("span"));
  return slide;
};

const handleRemoveButton = ({ prod, value, button }) => {
  const selectedProductsWrapper = document.querySelector(".stack--selected-products .swiper-wrapper");
  button.addEventListener("click", () => {
    handleProductRemoved({ prod, value });
    const swiperSlide = document.querySelector(`.swiper-slide[prod_id='${prod.id}'][value='${value?.id}']`);
    swiperSlide.remove();
    if (selectedProductsWrapper.querySelectorAll(".swiper-slide").length < 3) selectedProductsWrapper.appendChild(createPlaceholder());
    window.selectedProductsSwiper.update();
  });
};

export default handleRemoveButton;

import createProductCard from "./createProductCard.js";

const createProductSwiper = () => {
  const swiper = document.createElement("div");
  swiper.classList.add("swiper");
  swiper.classList.add("stack--swiper-product");
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");
  swiper.appendChild(swiperWrapper);
  const navigationContainer = document.createElement("div");
  navigationContainer.classList.add("stack--navigation-container");
  const swiperNext = document.createElement("button");
  swiperNext.type = "button";
  swiperNext.classList.add("stack--swiper-arrow");
  swiperNext.classList.add("stack--next");
  swiperNext.innerHTML = '<svg width="47" height="46" viewBox="0 0 47 46" fill="white" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" width="46" height="46" rx="23" fill="#FF0000"/><rect x="32.0488" y="23" width="3.22807" height="18.5614" transform="rotate(135 32.0488 23)" fill="white"/><rect x="18.9238" y="36.125" width="3.22807" height="18.5614" transform="rotate(-135 18.9238 36.125)" fill="white"/></svg>';
  const swiperPrev = document.createElement("button");
  swiperPrev.classList.add("stack--swiper-arrow");
  swiperPrev.classList.add("stack--prev");
  swiperPrev.type = "button";
  swiperPrev.innerHTML = '<svg width="47" height="46" viewBox="0 0 47 46" fill="white" xmlns="http://www.w3.org/2000/svg"><rect width="46" height="46" rx="23" transform="matrix(-1 0 0 1 46.5 0)" fill="#FF0000"/><rect width="3.22807" height="18.5614" transform="matrix(0.707107 0.707107 0.707107 -0.707107 14.9512 23)" fill="white"/><rect width="3.22807" height="18.5614" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 28.0762 36.125)" fill="white"/></svg>';
  const swiperPagination = document.createElement("div");
  swiperPagination.classList.add("swiper-pagination");
  swiperPagination.classList.add("stack--swiper-pagination");
  navigationContainer.appendChild(swiperPrev);
  navigationContainer.appendChild(swiperPagination);
  navigationContainer.appendChild(swiperNext);
  return { swiper: swiper, wrapper: swiperWrapper, navigationContainer };
};

const createProductCategory = ({ title, secondaryTitle, data, hasFormulas }) => {
  const categoryContainer = document.createElement("div");
  const categoryTitle = document.createElement("h2");
  const categorySecondaryTitle = document.createElement("h2");
  const productsWrapper = document.createElement("div");
  categoryContainer.classList.add("stack--category-container");
  categoryContainer.id = secondaryTitle.replaceAll(" ", "-").replaceAll(",", "").toLowerCase();
  categoryTitle.innerHTML = title;
  categorySecondaryTitle.innerHTML = secondaryTitle;
  categoryTitle.classList.add("stack--category-title");
  categoryTitle.classList.add("stack--active");
  categorySecondaryTitle.classList.add("stack--category-title");
  productsWrapper.classList.add("stack--products-wrapper");
  categoryContainer.appendChild(categoryTitle);
  categoryContainer.appendChild(categorySecondaryTitle);
  categoryContainer.appendChild(productsWrapper);
  data.forEach((prod) => {
    if (Object.keys(prod.stock).every((key) => prod.stock[key] <= 0)) return;
    const title = document.createElement("h3");
    const prodWrapper = document.createElement("div");
    prodWrapper.classList.add("stack--product-wrapper");
    productsWrapper.appendChild(prodWrapper);
    title.classList.add("stack--product-title");
    title.innerHTML = `${prod.name} <span class="stack--upcharge">${prod.upcharge ? `(+$${prod.upcharge})` : ""}</span>`;
    prodWrapper.appendChild(title);
    if (hasFormulas) {
      prodWrapper.setAttribute("formula-id", prod.id);
    }
    if (prod.options[0]) {
      const { swiper, wrapper, navigationContainer } = createProductSwiper();
      const grid = document.createElement("div");
      prod.options[0].values.forEach((value) => {
        if (!value.in_stock) return;
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.appendChild(createProductCard({ prod, value }));
        wrapper.appendChild(slide);
      });
      prodWrapper.appendChild(swiper);
      prodWrapper.appendChild(navigationContainer);
    } else {
      if (prod.stock["[]"] <= 0) return;
      const prodCard = createProductCard({ prod });
      prodCard.classList.add("small");
      productsWrapper.appendChild(prodCard);
    }
  });
  return categoryContainer;
};

export default createProductCategory;

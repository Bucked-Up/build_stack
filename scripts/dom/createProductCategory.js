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

const createProductCategory = ({ title, secondaryTitle, data, isActive }) => {
  const categoryContainer = document.createElement("div");
  const categoryTitle = document.createElement("h2");
  const categorySecondaryTitle = document.createElement("h2");
  const productGrid = document.createElement("div");
  // const goBackButton = document.createElement("button");
  // goBackButton.type = "button";
  // goBackButton.classList.add("stack--go-back")
  // goBackButton.innerHTML = '<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="23" cy="23" r="22" stroke="black" stroke-width="2"/><path d="M10.5455 21.6758C9.8201 22.4082 9.8201 23.5977 10.5455 24.3301L19.8313 33.7051C20.5567 34.4375 21.7348 34.4375 22.4603 33.7051C23.1857 32.9727 23.1857 31.7832 22.4603 31.0508L16.3375 24.875H34.1429C35.1701 24.875 36 24.0371 36 23C36 21.9629 35.1701 21.125 34.1429 21.125H16.3433L22.4545 14.9492C23.1799 14.2168 23.1799 13.0273 22.4545 12.2949C21.729 11.5625 20.5509 11.5625 19.8255 12.2949L10.5397 21.6699L10.5455 21.6758Z" fill="black"/></svg>'
  categoryContainer.classList.add("stack--category-container");
  if (isActive) categoryContainer.classList.add("stack--active");
  categoryContainer.id = secondaryTitle.replaceAll(" ", "-").replaceAll(",", "").toLowerCase();
  categoryTitle.innerHTML = title;
  categorySecondaryTitle.innerHTML = secondaryTitle;
  categoryTitle.classList.add("stack--category-title");
  categoryTitle.classList.add("stack--active");
  categorySecondaryTitle.classList.add("stack--category-title");
  productGrid.classList.add("stack--product-grid");
  // categoryContainer.appendChild(goBackButton);
  categoryContainer.appendChild(categoryTitle);
  categoryContainer.appendChild(categorySecondaryTitle);
  categoryContainer.appendChild(productGrid);
  data.forEach((prod) => {
    // if (Object.keys(prod.stock).every((key) => prod.stock[key] <= 0)) return;
    const title = document.createElement("h3");
    title.classList.add("stack--product-title");
    title.innerHTML = `${prod.name} <span class="stack--upcharge">${prod.upcharge ? `(+$${prod.upcharge})` : ""}</span>`;
    productGrid.appendChild(title);
    if (prod.options[0]) {
      const { swiper, wrapper, navigationContainer } = createProductSwiper();
      productGrid.appendChild(swiper);
      productGrid.appendChild(navigationContainer);
      prod.options[0].values.forEach((value) => {
        if (!value.in_stock) return;
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.appendChild(createProductCard({ prod, value }));
        wrapper.appendChild(slide);
      });
    } else {
      // if (prod.stock["[]"] <= 0) return;
      const prodCard = createProductCard({ prod });
      prodCard.classList.add("small");
      productGrid.appendChild(prodCard);
    }
  });
  return categoryContainer;
};

export default createProductCategory;

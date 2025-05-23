const handleSwipers = () => {
  const selectedProductsSwiper = new Swiper(".stack--selected-products", {
    slidesPerView: 4,
    spaceBetween: 8,
    freeMode: {
      enabled: true,
      sticky: false,
    },
    mousewheel: {
      enabled: true,
    },
    scrollbar: {
      el: ".stack--selected-products__scrollbar",
      draggable: true,
    },
  });
  window.selectedProductsSwiper = selectedProductsSwiper;

  const swiperArrowsNext = document.querySelectorAll(".stack--swiper-arrow.stack--next");
  const swiperArrowsPrev = document.querySelectorAll(".stack--swiper-arrow.stack--prev");
  const swiperPaginations = document.querySelectorAll(".stack--swiper-pagination");
  document.querySelectorAll(".stack--swiper-product").forEach((swiper, i) => {
    swiper.setAttribute("swiper-product", i);
    swiperArrowsNext[i].setAttribute("swiper-arrow", i);
    swiperArrowsPrev[i].setAttribute("swiper-arrow", i);
    swiperPaginations[i].setAttribute("swiper-pagination", i);
    new Swiper(`[swiper-product='${i}']`, {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 14,
      rewind: true,
      pagination: {
        el: `[swiper-pagination='${i}']`,
        clickable: true,
      },
      navigation: {
        nextEl: `.stack--next[swiper-arrow='${i}']`,
        prevEl: `.stack--prev[swiper-arrow='${i}']`,
      },
      breakpoints: {
        701: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
      },
    });
  });
};

export default handleSwipers;

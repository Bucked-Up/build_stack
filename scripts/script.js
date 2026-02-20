import handleDom from "./dom/handleDom.js";
import toggleLoading from "./dom/toggleLoading.js";
import handleBuy from "./handleBuy.js";
import handleGoBackButton from "./handleGoBackButton.js";
import handleInit from "./handleInit.js";
import handleLocalStorageProducts from "./handleLocalStorageProducts.js";
import handleMobileDropdown from "./handleMobileDropdown.js";
import handleModal from "./handleModal.js";
import handleSwipers from "./handleSwipers.js";

const buildStack = async ({ stackId, categories, formulas, upsellId, couponCode }) => {
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      document.body.classList.remove("loading");
    }
  });
  let urlParams = new URLSearchParams(window.location.search);
  if (urlParams.size == 0) urlParams = new URLSearchParams(window.location.hash.split("?")[1]);
  toggleLoading();
  const data = await handleLocalStorageProducts({ categories, timestamp: 5 * 60 * 1000 });
  toggleLoading();
  handleDom({ data, formulas });
  handleSwipers();
  handleInit();
  const mobileButton = document.querySelector(".stack--mobile-dropdown-button");
  const placeholders = document.querySelectorAll(".swiper .stack--placeholder");
  [mobileButton,...placeholders].forEach(el=>handleMobileDropdown(el))
  handleGoBackButton();
  if (upsellId) {
    handleModal();
    document.getElementById("buy-button").addEventListener("click", () => handleBuy({ upsellId, couponCode, stackId, urlParams }));
    document.getElementById("no-button").addEventListener("click", () => handleBuy({ couponCode, stackId, urlParams }));
  } else {
    document.getElementById("upsell-button").addEventListener("click", () => handleBuy({ couponCode, stackId, urlParams }));
  }
};

// buildStack({
//   stackId: 2165,
//   formulas: [
//     {
//       name: "Bucked Up",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/3946-BU-BuckedUp-Miami-2023.09-01-1200px-01F.webp",
//       id: "162",
//     },
//     {
//       name: "Woke AF (+$4.99)",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/559-BU-WokeAF-WH-BloodRaz-2023.09-01-1200px-01F.webp",
//       id: "161",
//     },
//     {
//       name: "Mother Bucker (+$4.99)",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/7970-BU-MotherBucker-GymJunkieJuice-2023.09-01-1200px-01F.webp",
//       id: "977",
//     },
//     {
//       name: "BAMF (+$4.99)",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/1276-BU-BuckedUp-GymNJuice-2023.09-01-1200px-01F.webp",
//       id: "255",
//     },
//     {
//       name: "LFG (+$4.99)",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/12445-BU-LFG-Berry-2023.09-01-1200px-01F.webp",
//       id: "698",
//     },
//     {
//       name: "Babe",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/12138-12010-WHO-Babe-Pre-[CaraLoren]PeachMango-30srv-24.08-05-1200px-01F%20(1).1729522499%20(1).webp",
//       id: "1126",
//     },
//     {
//       name: "Bucked Up 100 Series",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/9870-BU-StrawberryLemonade-2023.09-01-1200px-01F.webp",
//       id: "1096",
//     },
//     {
//       name: "WOKE AF 100 Series (+$4.99)",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/9872-100%20SERIES%20WOKE%20AF-STRAWBERRY%20LEMONADE-FRONT.png",
//       id: "1373",
//     },
//     {
//       name: "BAMF 100 Series (+$4.99)",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/9874-BU-BAMF-100-StrawberryLemonade-2023.09-01-1200px-01F.webp",
//       id: "1374",
//     },
//     {
//       name: "LFG 100 Series (+$4.99)",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/9892-BU-LFG100-Miami-2023.09-01-1200px-01F.webp",
//       id: "1375",
//     },
//     {
//       name: "Bucked Up Non-Stimulant",
//       image: "https://www.buckedup.com/cdn-cgi/image/width=600,format=auto,quality=85/public/upload/img/products/options/values/571-BU-NonStim-RaspberryLimeRicky-2023.09-01-1200px-01F.webp",
//       id: "163"
//     },
//   ],
//   categories: [
//     {
//       title: "STEP 2: CHOOSE YOUR FLAVOR",
//       secondaryTitle: "PRE-WORKOUTS",
//       products: [{ id: 162 }, { id: 161, upcharge: 4.99 }, { id: 977, upcharge: 4.99 }, { id: 255, upcharge: 4.99 }, { id: 698, upcharge: 4.99 }, { id: 1126 }, { id: 1096 }, { id: 1373, upcharge: 4.99 }, { id: 1374, upcharge: 4.99 }, { id: 1375, upcharge: 4.99 }, { id: 163 }],
//     },
//     {
//       title: "STEP 3: SUPPORT",
//       secondaryTitle: "SUPPORT",
//       products: [{ id: 1275, upcharge: 9.99 }, { id: 1455, upcharge: 9.99 }, { id: 320 }, { id: 164 }, { id: 498 }, { id: 123, upcharge: 9.99 }],
//     },
//     {
//       title: "STEP 4: RECOVERY",
//       secondaryTitle: "RECOVERY",
//       products: [{ id: 201 }, { id: 485 }, { id: 312 }, { id: 2163 }, { id: 1748 }],
//     },
//   ],
// });
window.buildStack = buildStack;

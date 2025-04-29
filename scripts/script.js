import handleDom from "./dom/handleDom.js";
import toggleLoading from "./dom/toggleLoading.js";
import handleBuy from "./handleBuy.js";
import handleGoBackButton from "./handleGoBackButton.js";
import handleInit from "./handleInit.js";
import handleLocalStorageProducts from "./handleLocalStorageProducts.js";
import handleMobileDropdown from "./handleMobileDropdown.js";
import handleModal from "./handleModal.js";
import handleSwipers from "./handleSwipers.js";

const buildStack = async ({ stackId, categories, upsellId, couponCode }) => {
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      document.body.classList.remove("loading");
    }
  });
  toggleLoading();
  const data = await handleLocalStorageProducts({ categories, timestamp: 5 * 60 * 1000 });
  toggleLoading();
  handleDom({ data });
  handleSwipers();
  handleInit();
  handleMobileDropdown();
  handleGoBackButton();
  if (upsellId) {
    handleModal();
    document.getElementById("buy-button").addEventListener("click", () => handleBuy({ upsellId, couponCode, stackId }));
    document.getElementById("no-button").addEventListener("click", () => handleBuy({ couponCode, stackId }));
  } else {
    document.getElementById("upsell-button").addEventListener("click", () => handleBuy({ couponCode, stackId }));
  }
};

// buildStack({
//   stackId: 2165,
//   categories: [
//     {
//       title: "STEP 1: PRE-WORKOUTS",
//       secondaryTitle: "PRE-WORKOUTS",
//       products: [{ id: 162 }, { id: 161, upcharge: 4.99 }, { id: 977, upcharge: 4.99 }, { id: 255, upcharge: 4.99 }, { id: 698, upcharge: 4.99 }, { id: 1126 }, { id: 1096 }, { id: 1373, upcharge: 4.99 }, { id: 1374, upcharge: 4.99 }, { id: 1375, upcharge: 4.99 }, { id: 163 }],
//     },
//     {
//       title: "STEP 2: SUPPORT",
//       secondaryTitle: "SUPPORT",
//       products: [{ id: 1275, upcharge: 9.99 }, { id: 1455, upcharge: 9.99 }, { id: 320 }, { id: 164 }, { id: 498 }, { id: 123, upcharge: 9.99 }],
//     },
//     {
//       title: "STEP 3: RECOVERY",
//       secondaryTitle: "RECOVERY",
//       products: [{ id: 201 }, { id: 485 }, { id: 312 }, { id: 2163 }, { id: 1748 }],
//     },
//   ],
// });
window.buildStack = buildStack;

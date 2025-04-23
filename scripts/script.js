import handleDom from "./dom/handleDom.js";
import toggleLoading from "./dom/toggleLoading.js";
import handleBuy from "./handleBuy.js";
import handleInit from "./handleInit.js";
import handleLocalStorageProducts from "./handleLocalStorageProducts.js";
import handleMobileDropdown from "./handleMobileDropdown.js";
import handleModal from "./handleModal.js";
import handleSwipers from "./handleSwipers.js";

const buildStack = async ({ preWorkoutIds, supportIds, recoveryIds, upsellId, couponCode }) => {
  toggleLoading();
  const [preWorkoutData, supportData, recoveryData] = await handleLocalStorageProducts({ preWorkoutIds, supportIds, recoveryIds, timestamp: 5 * 60 * 1000 });
  toggleLoading();
  handleDom({ preWorkoutData, supportData, recoveryData });
  handleSwipers();
  handleInit();
  handleMobileDropdown();
  handleModal();
  document.getElementById("buy-button").addEventListener("click", () => handleBuy({ upsellId, couponCode }));
  document.getElementById("no-button").addEventListener("click", () => handleBuy({ couponCode }));
};
window.buildStack = buildStack;

import handleDom from "./dom/handleDom.js";
import toggleLoading from "./dom/toggleLoading.js";
import handleBuy from "./handleBuy.js";
import handleInit from "./handleInit.js";
import handleLocalStorageProducts from "./handleLocalStorageProducts.js";
import handleSwipers from "./handleSwipers.js";

const buildStack = async () => {
  toggleLoading();
  const [preWorkoutData, supportData, recoveryData] =
    await handleLocalStorageProducts(5 * 60 * 1000);
  toggleLoading();
  handleDom({ preWorkoutData, supportData, recoveryData });
  handleSwipers();
  handleInit();
  document.getElementById("buy-button").addEventListener("click", handleBuy);
};
buildStack();

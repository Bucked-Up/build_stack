import toggleLoading from "./dom/toggleLoading.js";
import getCookie from "./getCookie.js";

const includesWholeWord = (str, word) => new RegExp(`\\b${word}\\b`, "i").test(str);

const handleStackProducts = async (stackProducts, stackId) => {
  let string = "";
  const response = await fetch(`https://www.buckedup.com/product/json/detail?product_id=${stackId}`);
  const data = await response.json();
  stackProducts.forEach((prod) => {
    let name = prod.prod.name.split(" ")[0];
    let aux = "";
    if (prod.prod.name.includes("100 Series")) name = "100 Series";
    else if (prod.prod.name.includes("Hydration")) name = "Hydration";
    else if (prod.prod.name.includes("Non-Stimulant")) name = "Stim";
    else if (prod.prod.name.includes("Gummies")) aux = "Gummies";
    else if (prod.prod.name.includes("Babe")) aux = prod.prod.name.includes("Bikini") ? "Bikini" : "Pre";
    const stackValue = data.product.options.flatMap((option) => option.values.map((value) => ({ ...value, optionId: option.id }))).find((item) => includesWholeWord(item.name, name) && includesWholeWord(item.name, aux) && item.name.toLowerCase().includes((prod.value?.name || "").toLowerCase()));
    string = string + `&products[0][options][${stackValue.optionId}]=${stackValue.id}`;
  });
  string = string + `&products[0][quantity]=1`;
  return string;
};

const handleBuy = async ({ stackId, upsellId, couponCode, urlParams }) => {
  const stackProducts = JSON.parse(localStorage.getItem("stack_productsv2"));
  if (stackProducts && stackProducts.length === 3) {
    toggleLoading();
    const rlAnonId = getCookie("rl_anonymous_id");
    if (rlAnonId) urlParams.set("rl_anonymous_id", rlAnonId);
    urlParams.set("source_url", location.href.split("?")[0]);
    const excessProducts = JSON.parse(localStorage.getItem("stack_excess_productsv2"));
    let string = `https://buckedup.com/cart/add?clear=true&products[0][id]=${stackId}`;
    string = string + (await handleStackProducts(stackProducts, stackId));
    const excessMapped =
      excessProducts?.map((item) => {
        return { prodId: item.prod.id, optionId: item.prod.options[0]?.id, valueId: item.value?.id };
      }) || [];
    const excessNoDuplicate = [];
    excessMapped.forEach((item) => {
      const existing = excessNoDuplicate.find((r) => r.prodId === item.prodId && r.valueId === item.valueId);
      if (existing) {
        existing.quantity += 1;
      } else {
        excessNoDuplicate.push({ ...item, quantity: 1 });
      }
    });
    excessNoDuplicate.forEach((item, i) => {
      string = string + `&products[${i + 1}][id]=${item.prodId}`;
      if (item.valueId) {
        string = string + `&products[${i + 1}][options][${item.optionId}]=${item.valueId}`;
      }
      string = string + `&products[${i + 1}][quantity]=${item.quantity}`;
    });
    if (upsellId) string = string + `&products[${excessNoDuplicate.length}][id]=${upsellId}&products[${excessNoDuplicate.length}][quantity]=1`;
    window.location.href = `${string}&cc=${couponCode}&${urlParams}`;
  }
};
export default handleBuy;

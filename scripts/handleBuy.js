const handleBuy = async () => {
  const currentProducts = await JSON.parse(localStorage.getItem("stack_selected_products"));
  let string = "https://buckedup.com/cart/add?clear=true";
  if (currentProducts && currentProducts.length > 0) {
    const productIds = currentProducts.map((item) => {
      return { prodId: item.prod.id, optionId: item.prod.options[0]?.id, valueId: item.value?.id };
    });
    const result = [];
    productIds.forEach((item) => {
      const existing = result.find((r) => r.prodId === item.prodId && r.valueId === item.valueId);
      if (existing) {
        existing.quantity += 1;
      } else {
        result.push({ ...item, quantity: 1 });
      }
    });
    result.forEach((item, i) => {
      string = string + `&products[${i}][id]=${item.prodId}`;
      if (item.valueId) {
        string = string + `&products[${i}][options][${item.optionId}]=${item.valueId}`;
      }
      string = string + `&products[${i}][quantity]=${item.quantity}`;
    });
    window.location.href = string;
  }
};
export default handleBuy;

const handleProductRemoved = async ({ prod, value }) => {
  const currentProducts = await JSON.parse(localStorage.getItem("stack_selected_products"));
  const toBeRemoved = currentProducts.find((item) => item.prod.id === prod.id && item.value?.id === value?.id);
  if (toBeRemoved) {
    const updatedProducts = currentProducts.filter(
      (item) => !(item.prod.id === prod.id && item.value?.id === value?.id)
    );
    localStorage.setItem("stack_selected_products", JSON.stringify(updatedProducts));
  }
};

export default handleProductRemoved;

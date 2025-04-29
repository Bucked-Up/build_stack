import getProducts from "./getProducts.js";

const handleLocalStorageProducts = async ({ categories, timestamp }) => {
  const cachedData = JSON.parse(localStorage.getItem("stackProducts"));
  if (cachedData && Date.now() - cachedData.timestamp < timestamp) return cachedData.data;
  const data = await Promise.all(
    categories.map(async (category) => {
      const products = await getProducts({ products: category.products });
      return { products, title: category.title, secondaryTitle: category.secondaryTitle };
    })
  );
  localStorage.setItem(
    "stackProducts",
    JSON.stringify({
      data: data,
      timestamp: Date.now(),
    })
  );
  return data;
};

export default handleLocalStorageProducts;

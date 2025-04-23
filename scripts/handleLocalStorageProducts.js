import getProducts from "./getProducts.js";

const handleLocalStorageProducts = async ({ preWorkoutIds, supportIds, recoveryIds, timestamp }) => {
  const cachedData = await JSON.parse(localStorage.getItem("stackProducts"));
  if (cachedData && Date.now() - cachedData.timestamp < timestamp) return cachedData.data;
  const data = await Promise.all([getProducts({ ids: preWorkoutIds }), getProducts({ ids: supportIds }), getProducts({ ids: recoveryIds })]);
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

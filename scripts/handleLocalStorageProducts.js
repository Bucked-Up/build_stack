import getProducts from "./getProducts.js";

const handleLocalStorageProducts = async (timestamp) => {
  const cachedData = await JSON.parse(localStorage.getItem("stackProducts"));
  if (cachedData && Date.now() - cachedData.timestamp < timestamp)
    return cachedData.data;
  const data = await Promise.all([
    getProducts({
      ids: [162, 161, 698, 977, 255, 1096, 1373, 1374, 1375, 163],
    }),
    getProducts({ ids: [1275, 1455, 320, 164, 498, 123] }),
    getProducts({ ids: [201, 485, 312, 1304, 1748] }),
  ]);
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

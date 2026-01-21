const getProducts = async ({ products, country }) => {
  let fetchUrl = "https://www.buckedup.com/product/json/detail?product_id=";
  const fetchApi = async (id, upcharge) => {
    let url = `${fetchUrl}${id}`;
    //if (country && country !== "us") url = url + `&country=${country}`;
    try {
      const response = await fetch(url);
      if (response.status === 404) throw new Error(`Product ${id} Not Found.`);
      if (response.status == 500 || response.status == 400) throw new Error("Sorry, there was a problem.");
      const data = await response.json();
      data.product.upcharge = upcharge || 0;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const data = await Promise.all(products.map(product=>fetchApi(product.id,product.upcharge)));
  return data.map((data) => data.product);
};

export default getProducts
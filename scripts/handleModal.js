const handleModal = () => {
  const button = document.querySelector("#upsell-button");
  const overlay = document.querySelector(".stack--modal__overlay");
  const modal = document.querySelector(".stack--modal");

  [button, overlay].forEach((el) =>
    el.addEventListener("click", async () => {
      const currentProducts = await JSON.parse(localStorage.getItem("stack_selected_products"));
      if (!currentProducts || currentProducts.length <= 0) return;
      modal.classList.toggle("stack--active");
    })
  );
};

export default handleModal;

const handleModal = () => {
  const button = document.querySelector("#upsell-button");
  const overlay = document.querySelector(".stack--modal__overlay");
  const modal = document.querySelector(".stack--modal");

  [button, overlay].forEach((el) =>
    el.addEventListener("click", () => {
      const stackProducts = JSON.parse(localStorage.getItem("stack_products"));
      if (!stackProducts || stackProducts.length < 3) return;
      modal.classList.toggle("stack--active");
    })
  );
};

export default handleModal;

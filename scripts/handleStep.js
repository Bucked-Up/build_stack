const handleStep = (goBack) => {
  const stackContainer = document.querySelector(".stack--container");
  const steps = Array.from(document.querySelectorAll(".stack--category-container"));
  if (steps.every((step) => step.classList.contains("stack--active"))) {
    stackContainer.classList.add("hide-add-remove-buttons");
    console.log("hide")
    steps.forEach((step) => {
      step.classList.remove("stack--active");
      const titles = step.querySelectorAll(".stack--category-title");
      titles[0].classList.add("stack--active");
      titles[1].classList.remove("stack--active");
    });
    steps[steps.length - 1].classList.add("stack--active");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }
  for (let i = 0; goBack ? steps.length : i < steps.length - 1; i++) {
    if (steps[i].classList.contains("stack--active")) {
      if (goBack) {
        steps[i].classList.remove("stack--active");
        steps[i - 1].classList.add("stack--active");
      } else {
        steps[i].classList.remove("stack--active");
        steps[i + 1].classList.add("stack--active");
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
  }
  steps.forEach((step) => {
    stackContainer.classList.remove("hide-add-remove-buttons");
    console.log("show")
    step.classList.add("stack--active");
    const titles = step.querySelectorAll(".stack--category-title");
    titles[0].classList.remove("stack--active");
    titles[1].classList.add("stack--active");
  });
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export default handleStep;

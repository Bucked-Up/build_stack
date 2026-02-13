let currentStep = 0;

const handleStep = (goBack) => {
  const stackContainer = document.querySelector(".stack--container");
  const steps = Array.from(document.querySelectorAll(".stack--category-container"));
  const dropdown = document.querySelector(".stack--info-row__mobile-wrapper__dropdown");
  const goBackButton = document.querySelector(".stack--go-back");

  if (currentStep > steps.length - 1) {
    steps.forEach((step) => {
      step.classList.remove("stack--active");
      const titles = step.querySelectorAll(".stack--category-title");
      if (titles.length > 1) {
        titles[0].classList.add("stack--active");
        titles[1].classList.remove("stack--active");
      }
    });
    steps[steps.length - 1].classList.add("stack--active");
    currentStep--;
    document.querySelectorAll(`[formula-id]`).forEach((el) => el.classList.remove("stack--active"));
    const choosenFormula = localStorage.getItem("stack_choosen_formulav2");
    document.querySelector(`[formula-id='${choosenFormula}']`).classList.add("stack--active");
    document.querySelector("#top").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }
  if (currentStep === steps.length - 1 && !goBack) {
    stackContainer.classList.remove("hide-add-remove-buttons");
    const [first, ...rest] = steps;
    rest.forEach((step) => {
      step.classList.add("stack--active");
      const titles = step.querySelectorAll(".stack--category-title");
      titles[1].classList.add("stack--active");
      titles[0].classList.remove("stack--active");
    });
    currentStep++;
    dropdown.classList.add("stack--active");
    document.querySelectorAll(`[formula-id]`).forEach((el) => el.classList.add("stack--active"));
    document.querySelector("#top").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }
  if (goBack) {
    steps[currentStep].classList.remove("stack--active");
    currentStep--;
    steps[currentStep].classList.add("stack--active");
    if (currentStep === 0) {
      goBackButton.classList.remove("stack--active");
    }
  } else {
    steps[currentStep].classList.remove("stack--active");
    currentStep++;
    steps[currentStep].classList.add("stack--active");
    goBackButton.classList.add("stack--active");
  }
  document.querySelector("#top").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  //   if (goBack && steps.find((step) => step.classList.contains("stack--active")) == steps[1]) goBackButton.classList.remove("stack--active");
  //   else goBackButton.classList.add("stack--active");

  //   if (steps.every((step) => step.classList.contains("stack--active"))) {
  //     stackContainer.classList.add("hide-add-remove-buttons");
  //     steps.forEach((step) => {
  //       step.classList.remove("stack--active");
  // const titles = step.querySelectorAll(".stack--category-title");
  // titles[0].classList.add("stack--active");
  // titles[1].classList.remove("stack--active");
  //     });
  //     steps[steps.length - 1].classList.add("stack--active");
  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });
  //     return;
  //   }
  //   for (let i = 0; goBack ? steps.length : i < steps.length - 1; i++) {
  //     if (steps[i].classList.contains("stack--active")) {
  //       if (goBack) {
  //         steps[i].classList.remove("stack--active");
  //         steps[i - 1].classList.add("stack--active");
  //       } else {
  //         steps[i].classList.remove("stack--active");
  //         steps[i + 1].classList.add("stack--active");
  //       }
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //       });
  //       return;
  //     }
  //   }
  //   steps.forEach((step) => {
  //     dropdown.classList.add("stack--active");
  //     stackContainer.classList.remove("hide-add-remove-buttons");
  //     step.classList.add("stack--active");
  //     const titles = step.querySelectorAll(".stack--category-title");
  //     titles[0].classList.remove("stack--active");
  //     titles[1].classList.add("stack--active");
  //   });
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
};

export default handleStep;

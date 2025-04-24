import createProductCategory from "./createProductCategory.js";

const handleDom = ({ preWorkoutData, supportData, recoveryData }) => {
  const prodRow = document.querySelector(".stack--prod-row")

  const preWorkoutCategory = createProductCategory({
    title: "First, choose a Pre-Workout",
    secondaryTitle: "PRE-WORKOUTS",
    data: preWorkoutData,
    isActive: true,
  });
  const supportCategory = createProductCategory({
    title: "Now, choose a Support",
    secondaryTitle: "SUPPORT",
    data: supportData,
  });
  const recoveryCategory = createProductCategory({
    title: "And Lastly, choose a Recovery",
    secondaryTitle: "RECOVERY",
    data: recoveryData,
  });

  prodRow.appendChild(preWorkoutCategory);
  prodRow.appendChild(supportCategory);
  prodRow.appendChild(recoveryCategory);
};

export default handleDom;

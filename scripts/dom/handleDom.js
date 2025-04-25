import createProductCategory from "./createProductCategory.js";

const handleDom = ({ preWorkoutData, supportData, recoveryData }) => {
  const prodRow = document.querySelector(".stack--prod-row")

  const preWorkoutCategory = createProductCategory({
    title: "STEP 1: PRE-WORKOUTS",
    secondaryTitle: "PRE-WORKOUTS",
    data: preWorkoutData,
    isActive: true,
  });
  const supportCategory = createProductCategory({
    title: "STEP 2: SUPPORT",
    secondaryTitle: "SUPPORT",
    data: supportData,
  });
  const recoveryCategory = createProductCategory({
    title: "STEP 3: RECOVERY",
    secondaryTitle: "RECOVERY",
    data: recoveryData,
  });

  prodRow.appendChild(preWorkoutCategory);
  prodRow.appendChild(supportCategory);
  prodRow.appendChild(recoveryCategory);
};

export default handleDom;

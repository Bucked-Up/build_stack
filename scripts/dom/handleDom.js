import createProductCategory from "./createProductCategory.js";

const handleDom = ({ preWorkoutData, supportData, recoveryData }) => {
  const prodRow = document.querySelector(".stack--prod-row")

  const preWorkoutCategory = createProductCategory({
    title: "PRE-WORKOUTS",
    data: preWorkoutData,
  });
  const supportCategory = createProductCategory({
    title: "SUPPORT",
    data: supportData,
  });
  const recoveryCategory = createProductCategory({
    title: "RECOVERY",
    data: recoveryData,
  });

  prodRow.appendChild(preWorkoutCategory);
  prodRow.appendChild(supportCategory);
  prodRow.appendChild(recoveryCategory);
};

export default handleDom;

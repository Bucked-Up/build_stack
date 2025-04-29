import createProductCategory from "./createProductCategory.js";

const handleDom = ({ data }) => {
  const prodRow = document.querySelector(".stack--prod-row");
  data.forEach((category, i) =>
    prodRow.appendChild(
      createProductCategory({
        title: category.title,
        secondaryTitle: category.secondaryTitle,
        data: category.products,
        isActive: i === 0,
      })
    )
  );
};

export default handleDom;

import createFormulaCard from "./createFormulaCard.js";
import createProductCategory from "./createProductCategory.js";

const handleDom = ({ data, formulas }) => {
  const prodRow = document.querySelector(".stack--prod-row");
  const prodGrid = document.querySelector(".stack--products-grid");
  formulas.forEach(formula=>{
    prodGrid.appendChild(createFormulaCard(formula))
  })
  data.forEach((category, i) =>
    prodRow.appendChild(
      createProductCategory({
        title: category.title,
        secondaryTitle: category.secondaryTitle,
        data: category.products,
        hasFormulas: i === 0,
      })
    )
  );
};

export default handleDom;

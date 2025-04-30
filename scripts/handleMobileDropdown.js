const handleMobileDropdown = (el) =>{
  const dropdown = document.querySelector(".stack--info-row__mobile-wrapper__dropdown");
  el.addEventListener("click",()=>{
    dropdown.classList.toggle("stack--active")
  })
}

export default handleMobileDropdown;
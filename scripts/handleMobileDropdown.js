const handleMobileDropdown = () =>{
  const button = document.querySelector(".stack--mobile-dropdown-button");
  const dropdown = document.querySelector(".stack--info-row__mobile-wrapper__dropdown");
  button.addEventListener("click",()=>{
    dropdown.classList.toggle("stack--active")
  })
}

export default handleMobileDropdown;
import { getDropdownElements } from "./getElements.js";
import { showUnitDropDown } from "./showHideElements.js";


const iconDropdown = getDropdownElements().iconDropdown;


const changeTempUnit = () => {
    
}




const dropdownCallbacks = (e) => {
    showUnitDropDown();
    if (e.target.id === "temperature-cel") {
        console.log(e.target);
    }
}




iconDropdown.addEventListener('click', dropdownCallbacks);
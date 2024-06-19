import { createCheckboxElement } from "./createcheckBoxElement";

// Function to render the checkboxes to a container
export function renderCheckboxes(containerId: string, checkboxes: CheckboxItem[]) {    
    const container = document.getElementById(containerId);
    
    if (container) {
      checkboxes.forEach(item => {
        const checkboxElement = createCheckboxElement(item);
        container.appendChild(checkboxElement);
      });
    }
  }
  

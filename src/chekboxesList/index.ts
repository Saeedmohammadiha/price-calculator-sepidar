import { createSubSystemCheckboxElement } from "./createSubSystemListCheckBoxElement";
import { createSystemCheckboxElement } from "./createSystemListCheckBoxElement";

// Function to render the checkboxes to a container
export function renderSystemsList(checkboxes: CheckboxItem[]) {
  const container = document.getElementById("systemsListContainer");
  container!.innerHTML = "";

  checkboxes.forEach((item) => {
    const checkboxElement = createSystemCheckboxElement(item);
    container!.appendChild(checkboxElement);
  });
}

// Function to render the checkboxes to a container
export function renderSubSystemsList(checkboxes: CheckboxItem[]) {
  const container = document.getElementById("subSystemsListContainer");
  container!.innerHTML = "";

  checkboxes.forEach((item) => {
    const checkboxElement = createSubSystemCheckboxElement(item);
    container!.appendChild(checkboxElement);
  });
}

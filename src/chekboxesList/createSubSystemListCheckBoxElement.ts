import { toggleModal } from "../modal";
import { subSystemsList, updateSubSystemsList } from "../state/subSystemsList";
import { checkIfPreORSysAreChecked, checkIfPreSubORSysAreChecked, checkIfPreSubSysAreChecked, checkIfPreSysAreChecked, unCheckTheSubSysPostsOfunCheckedItem, unCheckTheSysPostsOfunCheckedItem } from "./createSystemListCheckBoxElement";

// Function to create the HTML elements
export function createSubSystemCheckboxElement(
  item: CheckboxItem
): HTMLElement {
  const label = document.createElement("label");
  label.setAttribute("for", item.id.toString());
  label.className =
    "select-none hover:cursor-pointer item flex justify-between p-1 text-sm rounded-md bg-[#e6e6e6] has-[:checked]:bg-[#cacaca]";

  const divContainer = document.createElement("div");
  divContainer.className = "flex gap-2";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = item.id;
  input.className =
    "peer relative shrink-0 appearance-none w-4 h-4 hover:cursor-pointer rounded-md mt-1 bg-[#999999] checked:bg-[#999999]";
  input.checked = item.checked;
  input.addEventListener("change", checkboxSubSystemListChangeHandler);
  const span = document.createElement("span");
  span.textContent = item.name;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "absolute w-4 h-4 mt-1 hidden peer-checked:block");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "white");
  svg.setAttribute("stroke-width", "4");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  const polyline = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline"
  );
  polyline.setAttribute("points", "20 6 9 17 4 12");

  svg.appendChild(polyline);

  const divPrice = document.createElement("div");
  divPrice.className = "itemPrice";
  divPrice.textContent = `+${item.price} ریال`;

  divContainer.appendChild(input);
  divContainer.appendChild(span);
  divContainer.appendChild(svg);

  label.appendChild(divContainer);
  label.appendChild(divPrice);

  return label;
}

function checkboxSubSystemListChangeHandler(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  let updatedItem = subSystemsList.find((item) => item.id === checkbox.id);

  if (updatedItem) {

   
    if (checkbox.checked) {
      if (
        checkIfPreSysAreChecked(updatedItem) &&
        checkIfPreSubSysAreChecked(updatedItem) &&
        checkIfPreORSysAreChecked(updatedItem) &&
        checkIfPreSubORSysAreChecked(updatedItem)
      ) {
        updatedItem.checked = true;
      } 
    } else if (!checkbox.checked) {
      updatedItem = unCheckTheSysPostsOfunCheckedItem(updatedItem);
      updatedItem = unCheckTheSubSysPostsOfunCheckedItem(updatedItem);
    }
    updateSubSystemsList(updatedItem);

    // reset the select system
    const selectSystemEl = document.getElementById(
      "systemsSelect"
    ) as HTMLSelectElement;
    selectSystemEl.value = "0";

    // active the mobile select
    if (updatedItem.id === "subSys_9") {
      const mobileSelectEl = document.getElementById(
        "mobileUsersSelect"
      ) as HTMLSelectElement;
      if (checkbox.checked) {
        mobileSelectEl.disabled = false;
      } else {
        mobileSelectEl.disabled = true;
        mobileSelectEl.value = "0";
        document.getElementById("mobileUsersSelectPrice")!.innerHTML = "0";
      }
    }
  }
}

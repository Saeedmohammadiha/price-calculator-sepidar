import { toggleModal } from "../modal";
import { subSystemsList, updateSubSystemsList } from "../state/subSystemsList";
import { systemsList, updateSystemsList } from "../state/systemsList";

// Function to create the HTML elements
export function createSystemCheckboxElement(item: CheckboxItem): HTMLElement {
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
  input.addEventListener("change", checkboxChangeHandler);
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

function checkboxChangeHandler(event: Event) {
  const checkbox = event.target as HTMLInputElement;
  let updatedItem = systemsList.find((item) => item.id === checkbox.id);

  if (updatedItem) {
    if (checkbox.id === "sys_1") {
      updatedItem.checked = true;
    } else {
      if (checkbox.checked) {
        if (
          checkIfPreSysAreChecked(updatedItem) &&
          checkIfPreSubSysAreChecked(updatedItem) &&
          checkIfPreORSysAreChecked(updatedItem) &&
          checkIfPreSubORSysAreChecked(updatedItem)
        ) {
          updatedItem.checked = true;
        } else {
          console.log(checkIfPreSysAreChecked(updatedItem) ,
          checkIfPreSubSysAreChecked(updatedItem) ,
          checkIfPreORSysAreChecked(updatedItem) ,
          checkIfPreSubORSysAreChecked(updatedItem));
        }
      } else if (!checkbox.checked) {
        updatedItem = unCheckTheSysPostsOfunCheckedItem(updatedItem);
        updatedItem = unCheckTheSubSysPostsOfunCheckedItem(updatedItem);
      }
    }
    updateSystemsList(updatedItem);
  }

  // reset the select system
  const selectSystemEl = document.getElementById(
    "systemsSelect"
  ) as HTMLSelectElement;
  selectSystemEl.value = "0";

 
}

export function checkIfPreSysAreChecked(item: CheckboxItem): boolean {
  let areChecked: boolean = false;
  if (!item.pre!.length) return true;

  for (let index = 0; index < item.pre!.length; index++) {
    const element = item.pre![index];
    const preCheckbox = systemsList.find((item) => item.id === element);

    if (!preCheckbox?.checked) {
      areChecked = false;
      toggleModal(true, item.textForModal);
      break;
    } else {
      areChecked = true;
    }
  }
  return areChecked;
}

export function checkIfPreSubSysAreChecked(item: CheckboxItem): boolean {
  let areChecked: boolean = false;
  if (!item.preSub!.length) return true;

  for (let index = 0; index < item.preSub!.length; index++) {
    const element = item.preSub![index];
    const preSubCheckbox = subSystemsList.find((item) => item.id === element);

    if (!preSubCheckbox?.checked) {
      areChecked = false;
      toggleModal(true, item.textForModal);
      break;
    } else {
      areChecked = true;
    }
  }
  return areChecked;
}
export function checkIfPreORSysAreChecked(item: CheckboxItem): boolean {
  // If preOR is empty, return true immediately
  if (!item.preOR.length) return true;

  for (const element of item.preOR) {
    const preCheckbox = systemsList.find(system => system.id === element);
    console.log({ preCheckbox });

    if (preCheckbox?.checked) {
      return true; // Return true as soon as we find a checked item
    }
  }

  // If none of the items are checked, show the modal and return false
  toggleModal(true, item.textForModal);
  return false;
}

export function checkIfPreSubORSysAreChecked(item: CheckboxItem): boolean {
  if (!item.preSubOR.length) return true;

  for (const element of item.preSubOR) {
    const preCheckbox = subSystemsList.find(system => system.id === element);

    if (preCheckbox?.checked) {
      return true; // Return true as soon as we find a checked item
    }
  }

   // If none of the items are checked, show the modal and return false
   toggleModal(true, item.textForModal);
   return false;
  
}

export function unCheckTheSysPostsOfunCheckedItem(item: CheckboxItem) {
  let chengedItem = item;
  chengedItem.checked = false;

  if (!item.post.length) return chengedItem;

  for (let index = 0; index < item.post.length; index++) {
    const element = item.post[index];
    const postCheckbox = systemsList.find((item) => item.id === element);
    postCheckbox!.checked = false;
  }

  return chengedItem;
}

export function unCheckTheSubSysPostsOfunCheckedItem(item: CheckboxItem) {
  let chengedItem = item;
  chengedItem.checked = false;

  if (!item.postSub.length) return chengedItem;

  for (let index = 0; index < item.postSub.length; index++) {
    const element = item.postSub[index];
    const postSubCheckbox = subSystemsList.find((item) => item.id === element);
    postSubCheckbox!.checked = false;
    updateSubSystemsList(postSubCheckbox!);
  }

  return chengedItem;
}

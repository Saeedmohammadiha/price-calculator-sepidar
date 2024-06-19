// Function to create the HTML elements
export function createCheckboxElement(item: CheckboxItem): HTMLElement {
  const label = document.createElement("label");
  label.setAttribute("for", item.id.toString());
  label.className =
    "select-none hover:cursor-pointer item flex justify-between p-1 text-sm rounded-md bg-[#e6e6e6] has-[:checked]:bg-[#cacaca]";

  const divContainer = document.createElement("div");
  divContainer.className = "flex gap-2";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = item.id.toString()
  input.className =
    "peer relative shrink-0 appearance-none w-4 h-4 hover:cursor-pointer rounded-md mt-1 bg-[#999999] checked:bg-[#999999]";
  input.checked = item.checked;
input.addEventListener("change",checkboxChangeHandler)
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
  divPrice.textContent = item.price;

  divContainer.appendChild(input);
  divContainer.appendChild(span);
  divContainer.appendChild(svg);

  label.appendChild(divContainer);
  label.appendChild(divPrice);

  return label;
}



export function checkboxChangeHandler(e: Event){
  const target = e.target as HTMLInputElement
  if(target.id === "1"){
    target.checked = false
  }
  console.log(e.target);
  

}
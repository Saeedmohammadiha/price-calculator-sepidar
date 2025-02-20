import { calculatePrice } from "../PriceCalculator";
import { setSelectPrice } from "../state/selectPrices";
import { formatPrice } from "../utils";

export function addOptionsToLockSelect() {
  const values = [
    { id: "0", value: "0", text: "0" },
    { id: "1", value: "1", text: "1" },
    { id: "2", value: "2", text: "2" },
    { id: "3", value: "3", text: "3" },
    { id: "4", value: "4", text: "4" },
    { id: "5", value: "5", text: "5" },
    { id: "6", value: "6", text: "6" },
    { id: "7", value: "7", text: "7" },
    { id: "8", value: "8", text: "8" },
    { id: "9", value: "9", text: "9" },
    { id: "10", value: "10", text: "10" },
  ];

  const select = document.getElementById("lockSelect");

  values.map((value) => {
    const option = document.createElement("option");
    option.value = value.value;
    option.text = value.text;
    select?.appendChild(option);
  });

  select!.addEventListener("change", lockSelectOnChangeHandler);
}

export function lockSelectOnChangeHandler(event: Event) {
  const price = 78000000;
  const value = (event.target as HTMLInputElement).value;
  setSelectPrice("lockPrice", Number(value) * price);
  calculatePrice()
  
  document.getElementById("lockSelectPrice")!.innerHTML = (
    formatPrice(Number(value) * price)
  ).toString();
}

import { calculatePrice } from "../PriceCalculator";
import { setSelectPrice } from "../state/selectPrices";
import { formatPrice } from "../utils";

export function addOptionsToMobileUsersSelect() {
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
    { id: "11", value: "11", text: "11" },
    { id: "12", value: "12", text: "12" },
    { id: "13", value: "13", text: "13" },
    { id: "14", value: "14", text: "14" },
    { id: "15", value: "15", text: "15" },
    { id: "16", value: "16", text: "16" },
    { id: "17", value: "17", text: "17" },
    { id: "18", value: "18", text: "18" },
    { id: "19", value: "19", text: "19" },
    { id: "20", value: "20", text: "20" },
  ];

  const select = document.getElementById(
    "mobileUsersSelect"
  ) as HTMLSelectElement;
  
  select.disabled = true;

  values.map((value) => {
    const option = document.createElement("option");
    option.value = value.value;
    option.text = value.text;
    select?.appendChild(option);
  });

  select!.addEventListener("change", mobileUsersSelectOnChangeHandler);
}

export function mobileUsersSelectOnChangeHandler(event: Event) {
  const price = 40000000;
  const value = (event.target as HTMLInputElement).value;
  setSelectPrice("mobileUserPrice", Number(value) * price);
  calculatePrice();

  document.getElementById("mobileUsersSelectPrice")!.innerHTML = (
    formatPrice(Number(value) * price)
  ).toString();
}

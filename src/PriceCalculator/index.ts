import { selectPrices } from "../state/selectPrices";
import { subSystemsList } from "../state/subSystemsList";
import { systemsList } from "../state/systemsList";

export function calculatePrice() {
  const totalPrice = calculateTotalPrice();

  const { isThereDiscount, totalPriceAfterDiscount } =
    calculateDiscount(totalPrice);
  console.log({ isThereDiscount });

  const tax = calculateTax(totalPriceAfterDiscount);
  const finalPriceAfterTax = totalPriceAfterDiscount + tax;

  const calculatedDiscountOrZero = isThereDiscount
    ? totalPriceAfterDiscount
    : 0;

  renderPrices({
    totalPrice,
    totalPriceAfterDiscount: calculatedDiscountOrZero,
    tax,
    finalPriceAfterTax,
  });
}

function calculateDiscount(totalPrice: number) {
  const filtered = systemsList.filter((item) => item.checked);
  const isThereAnotherSystem = filtered.length > 1;
  if (isThereAnotherSystem) {
    return { isThereDiscount: true, totalPriceAfterDiscount: totalPrice * 0.9 };
  }
  return { isThereDiscount: false, totalPriceAfterDiscount: totalPrice };
}

function calculateTax(totalPrice: number) {
  return totalPrice * 0.1;
}

function calculateTotalPrice(): number {
  const totalPriceSys = systemsList
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + parseInt(item.price), 0);

  const totalPriceSub = subSystemsList
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + parseInt(item.price), 0);

  const selectsToatalPrices = selectPrices.getTotalPrice();

  const totalPrice = totalPriceSys + totalPriceSub + selectsToatalPrices;

  return totalPrice;
}

type renderPricesArguments = {
  totalPrice: number;
  totalPriceAfterDiscount: number;
  tax: number;
  finalPriceAfterTax: number;
};

function renderPrices(prices: renderPricesArguments) {
  const { totalPrice, totalPriceAfterDiscount, tax, finalPriceAfterTax } =
    prices;

  const discountContainerEl = document.getElementById("discountContainer");
  const discountElement = document.getElementById("discount-price");
  const totalPriceElement = document.getElementById("total-price");
  const taxElement = document.getElementById("tax-price");
  const finalPriceElement = document.getElementById("final-price");

  if (totalPriceAfterDiscount === 0) {
    discountContainerEl?.classList.replace("flex", "hidden");
  } else {
    discountContainerEl?.classList.replace("hidden", "flex");
    if (discountElement) {
      discountElement.innerHTML = totalPriceAfterDiscount.toString();
    }
  }

  totalPriceElement!.innerHTML = totalPrice.toString();
  taxElement!.innerHTML = tax.toString();
  finalPriceElement!.innerHTML = finalPriceAfterTax.toString();
}

import { selectPrices } from "../state/selectPrices";
import { subSystemsList } from "../state/subSystemsList";
import { systemsList } from "../state/systemsList";

export function calculatePrice() {
  const totalPrice = calculateTotalPrice();
  //TODO: check for discount if not it should return the totalPrice
  const totalPriceAfterDiscount = calculateDiscount(totalPrice);
  const tax = calculateTax(totalPriceAfterDiscount);
  const finalPriceAfterTax = totalPriceAfterDiscount + tax;
  renderPrices({
    totalPrice,
    totalPriceAfterDiscount,
    tax,
    finalPriceAfterTax,
  });
}

function calculateDiscount(totalPrice: number) {
  return totalPrice * 0.9;
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
  const totalPriceElement = document.getElementById("total-price");
  const discountElement = document.getElementById("discount-price");
  const taxElement = document.getElementById("tax-price");
  const finalPriceElement = document.getElementById("final-price");

  totalPriceElement!.innerHTML = totalPrice.toString();
  discountElement!.innerHTML = totalPriceAfterDiscount.toString();
  taxElement!.innerHTML = tax.toString();
  finalPriceElement!.innerHTML = finalPriceAfterTax.toString();
}

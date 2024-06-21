import { selectPrices } from "../state/selectPrices";
import { subSystemsList } from "../state/subSystemsList";
import { systemsList } from "../state/systemsList";
import { formatPrice } from "../utils";

export function calculatePrice() {
  const totalPrice = calculateTotalPrice();

  // calc discount
  const discount = calculateDiscount(totalPrice);
  const totalPriceAfterDiscount = totalPrice - discount;

  //calc hot discount
  const hotDiscount = calculateHotAndColdDiscount();
  const priceAfterHotDiscount = totalPriceAfterDiscount - hotDiscount;

  const tax = calculateTax(priceAfterHotDiscount);
  const finalPriceAfterTax = priceAfterHotDiscount + tax;

  renderPrices({
    hotDiscount,
    totalPrice,
    discount,
    totalPriceAfterDiscount,
    tax,
    finalPriceAfterTax,
    priceAfterHotDiscount
  });
}

function calculateHotAndColdDiscount() {
  const cold = systemsList.find((item) => item.id === "sys_12");
  const hot = systemsList.find((item) => item.id === "sys_13");

  if (!(cold?.checked && hot?.checked)) return 0;

  return parseInt(hot.price) * 0.1;
}

function calculateDiscount(totalPrice: number) {
  const filtered = systemsList.filter((item) => item.checked);
  const isThereAnotherSystem = filtered.length > 1;
  if (isThereAnotherSystem) {
    return totalPrice * 0.1;
  }
  return 0;
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
  discount: number;
  hotDiscount: number;
  priceAfterHotDiscount: number;
};

function renderPrices(prices: renderPricesArguments) {
  const {
    discount,
    hotDiscount,
   // priceAfterHotDiscount,
    totalPrice,
   // totalPriceAfterDiscount,
    tax,
    finalPriceAfterTax,
  } = prices;

  const discountContainerEl = document.getElementById("discountContainer");
  const discountElement = document.getElementById("discount-price");
  const hotDiscountContainerEl = document.getElementById("hot&coldDiscountContainer");
  const hotDiscountElement = document.getElementById("hot&coldDiscount-price");
  const totalPriceElement = document.getElementById("total-price");
  const taxElement = document.getElementById("tax-price");
  const finalPriceElement = document.getElementById("final-price");

  if (discount === 0) {
    discountContainerEl?.classList.replace("flex", "hidden");
  } else {
    discountContainerEl?.classList.replace("hidden", "flex");
    if (discountElement) {
      discountElement.innerHTML = formatPrice(discount)
    }
  }


  if (hotDiscount === 0) {
    hotDiscountContainerEl?.classList.replace("flex", "hidden");
  } else {
    hotDiscountContainerEl?.classList.replace("hidden", "flex");
    if (hotDiscountElement) {
      hotDiscountElement.innerHTML = formatPrice(hotDiscount)
    }
  }

  totalPriceElement!.innerHTML = formatPrice(totalPrice)
  taxElement!.innerHTML = formatPrice(tax)
  finalPriceElement!.innerHTML = formatPrice(finalPriceAfterTax)
}

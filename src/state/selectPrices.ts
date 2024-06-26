import { sharedCompaniePriceCalculate } from "../sharedCompaniesSelect";

type selectPrices = {
  lockPrice: number;
  mobileUserPrice: number;
  userCountPrice: number;
  sharedCompaniesPrice: number;
  getTotalPrice: () => number; // Add method to calculate total price
};
export const selectPrices: selectPrices = {
  lockPrice: 0,
  mobileUserPrice: 0,
  userCountPrice: 0,
  sharedCompaniesPrice: 0,
  getTotalPrice: function (): number {
    const sharedCompaniesSelectValue = (
      document.getElementById("sharedCompaniesSelect") as HTMLInputElement
    ).value;
    this.sharedCompaniesPrice = sharedCompaniePriceCalculate(
      sharedCompaniesSelectValue
    );

    // Implement the method
    return (
      this.lockPrice +
      this.mobileUserPrice +
      this.userCountPrice +
      this.sharedCompaniesPrice
    );
  },
};

export function setSelectPrice(
  name: Exclude<keyof selectPrices, "getTotalPrice">,
  price: number
) {
  selectPrices[name] = price;
}

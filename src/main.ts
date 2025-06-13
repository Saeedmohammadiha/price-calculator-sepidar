import { renderSubSystemsList, renderSystemsList } from "./chekboxesList";
import { addOptionsToLockSelect } from "./lockSelect";
import { addOptionsToMobileUsersSelect } from "./mobileUsersSelect";
import { calculatePrice } from "./PriceCalculator";
import { selectSystem } from "./selectSystem";
import { addOptionsToSharedCompaniesSelect } from "./sharedCompaniesSelect";
import { initData } from "./state/initData";
import { subSystemsList } from "./state/subSystemsList";
import { systemsList } from "./state/systemsList";
import "./styles.css";
import { addOptionsToUsersCountSelect } from "./usersCountSelect";

declare global {
  interface Window {
    ourData: {
      systemsList: {
        id: `sys_${number}`;
        name: string;
        price: string;
      }[];
      subSystemsList: {
        id: `subSys_${number}`;
        name: string;
        price: string;
      }[];
      lockSelectPerPrice: number;
      mobileUsersSelectPrice: number;
      usersCountSelectPrice: number;
      htmlDataOnePc: HtmlData;
      htmlDataMorePc: HtmlData;
      htmlDataInstallService: HtmlData;
      htmlDataHourlyService: HtmlData;
    };
  }
}

type HtmlData = {
  lable: string;
  price: string;
};

document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((ourData) => {
      window.ourData = ourData;
      initData();
      renderSystemsList(systemsList);
      renderSubSystemsList(subSystemsList);
      calculatePrice();

      selectSystem();
      addOptionsToLockSelect();
      addOptionsToUsersCountSelect();
      addOptionsToSharedCompaniesSelect();
      addOptionsToMobileUsersSelect();
    })
    .catch((er) => {
      console.log(er);
    });
});

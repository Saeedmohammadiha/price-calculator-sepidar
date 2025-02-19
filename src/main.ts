import { renderSubSystemsList, renderSystemsList } from "./chekboxesList";
import { addOptionsToLockSelect } from "./lockSelect";
import { addOptionsToMobileUsersSelect } from "./mobileUsersSelect";
import { calculatePrice } from "./PriceCalculator";
import { selectSystem } from "./selectSystem";
import { addOptionsToSharedCompaniesSelect } from "./sharedCompaniesSelect";
import { subSystemsList } from "./state/subSystemsList";
import { systemsList } from "./state/systemsList";
import "./styles.css";
import { addOptionsToUsersCountSelect } from "./usersCountSelect";

document.addEventListener("DOMContentLoaded", () => {




  renderSystemsList(systemsList);
  renderSubSystemsList(subSystemsList);
  calculatePrice();

  selectSystem();
  addOptionsToLockSelect();
  addOptionsToUsersCountSelect();
  addOptionsToSharedCompaniesSelect();
  addOptionsToMobileUsersSelect();
});

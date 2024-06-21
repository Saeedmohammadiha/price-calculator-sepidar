import { renderSubSystemsList, renderSystemsList } from "./chekboxesList";
import { addOptionsToLockSelect } from "./lockSelect";
import { addOptionsToMobileUsersSelectSelect } from "./mobileUsersSelect";
import { selectSystem } from "./selectSystem";
import { addOptionsToSharedCompaniesSelect } from "./sharedCompaniesSelect";
import { subSystemsList } from "./state/subSystemsList";
import { systemsList } from "./state/systemsList";
import "./style.css";
import { addOptionsToUsersCountSelect } from "./usersCountSelect";

selectSystem();

renderSystemsList(systemsList);
renderSubSystemsList(subSystemsList);

addOptionsToLockSelect();
addOptionsToUsersCountSelect();
addOptionsToSharedCompaniesSelect();
addOptionsToMobileUsersSelectSelect();

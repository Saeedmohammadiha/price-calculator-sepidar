import { renderCheckboxes } from './chekboxesList';
import { subSystemsList, systemsList } from './chekboxesList/values';
import { addOptionsToLockSelect } from './lockSelect';
import { addOptionsToMobileUsersSelectSelect } from './mobileUsersSelect';
import { selectSystem } from './selectSystem'
import { addOptionsToSharedCompaniesSelect } from './sharedCompaniesSelect';
import './style.css'
import { addOptionsToUsersCountSelect } from './usersCountSelect';

selectSystem()

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
  // Assuming you have a container with the id 'checkbox-container'
  renderCheckboxes('systemsListContainer', systemsList);
  renderCheckboxes('subSystemsListContainer', subSystemsList);
  addOptionsToLockSelect()
  addOptionsToUsersCountSelect()
  addOptionsToSharedCompaniesSelect()
  addOptionsToMobileUsersSelectSelect()
import { setNewSubSystemsList, subSystemsList } from "../state/subSystemsList";
import {
  setNewSystemsList,
  systemsList,
} from "../state/systemsList";

export function selectSystem() {
  const select = document.getElementById("systemsSelect");

  const values = [
    { id: "none", value: "0", text: "بسته خود را انتخاب کنید" },
    { id: "system1", value: "1", text: "نرم افزار حسابداری بازرگانی" },
    { id: "system2", value: "2", text: "نرم افزار حسابداری تولیدی" },
    { id: "system3", value: "3", text: "نرم افزار حسابداری خدماتی" },
    { id: "system4", value: "4", text: "نرم افزار حسابداری پیمانکاری" },
    { id: "system5", value: "5", text: "نرم افزار پخش مویرگی" },
  ];

  values.map((value) => {
    const option = document.createElement("option");
    option.value = value.value;
    option.text = value.text;
    select?.appendChild(option);
  });

  select?.addEventListener("change", selectOnChangeHandler);
}

export function selectOnChangeHandler(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  
  const systemCheckedItems: { [key: string]: string[] } = {
    "0": ["sys_1"],
    "1": ["sys_1", "sys_3", "sys_5", "sys_6", "sys_7"],
    "2": ["sys_1", "sys_3", "sys_4", "sys_5", "sys_6", "sys_10"],
    "3": ["sys_1", "sys_3", "sys_5", "sys_8"],
    "4": ["sys_1", "sys_3", "sys_5", "sys_9"],
    "5": ["sys_1", "sys_3", "sys_5", "sys_6", "sys_7", "sys_13"]
  };

  const subSystemCheckedItems: { [key: string]: string[] } = {
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": ["subSys_2"]
  };

  if (value in systemCheckedItems) {
    const newSysList = newListGenerator(systemsList, systemCheckedItems[value]);
    setNewSystemsList(newSysList);

    const newSubSysList = newListGenerator(subSystemsList, subSystemCheckedItems[value]);
    setNewSubSystemsList(newSubSysList);
  }
}

function newListGenerator(list: CheckboxItem[], trueItemsIdLIst: string[]) {
  const newList = list.map((item) => {
    const trueItem = trueItemsIdLIst.find((trueItem) => trueItem === item.id);

    if (trueItem) {
      item.checked = true;
    } else {
      item.checked = false;
    }

    return item;
  });
  return newList;
}

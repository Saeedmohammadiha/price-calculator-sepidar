import { renderSubSystemsList } from "../chekboxesList";
import { calculatePrice } from "../PriceCalculator";

export let subSystemsList: CheckboxItem[] = [
  {
    id: "subSys_1",
    name: "زیر سیستم ارزی",
    price: "90000000",
    checked: false,
  },
  {
    id: "subSys_2",
    name: "فروش پیشرفته",
    price: "115000000",
    checked: false,
  },
  {
    id: "subSys_3",
    name: "زیر سیستم توزین",
    price: "59000000",
    checked: false,
  },
  {
    id: "subSys_4",
    name: "زیر سیستم دو زبانه",
    price: "124000000",
    checked: false,
  },
  {
    id: "subSys_5",
    name: "مدیریت پیام",
    price: "27000000",
    checked: false,
  },
  {
    id: "subSys_6",
    name: "زیر سیستم ردیابی",
    price: "45000000",
    checked: false,
  },
  {
    id: "subSys_7",
    name: "زیر سیستم دو واحدی",
    price: "60000000",
    checked: false,
  },
  {
    id: "subSys_8",
    name: "تبدیل انبار بازرگانی به تولیدی",
    price: "55000000",
    checked: false,
  },
  {
    id: "subSys_9",
    name: "زیر سیستم موبایل و تبلت سفارش گیری",
    price: "126000000",
    checked: false,
  },
  {
    id: "subSys_10",
    name: "وب سرویس فروشگاه اینترنتی",
    price: "265000000",
    checked: false,
  },
  {
    id: "subSys_11",
    name: "زیر سیستم مدیریت تنخواه گردان",
    price: "42000000",
    checked: false,
  },
  {
    id: "subSys_12",
    name: "زیر سیستم گزارش‌های مدیریتی",
    price: "55000000",
    checked: false,
  },
  {
    id: "subSys_13",
    name: "تبدیل فروش خدماتی به مشتریان و فروش",
    price: "19000000",
    checked: false,
  },
];

export function updateSubSystemsList(updatedItem: CheckboxItem) {
  const index = subSystemsList.findIndex((item) => item.id === updatedItem.id);
  if (index !== -1) {
    subSystemsList[index] = updatedItem;
  }
  renderSubSystemsList(subSystemsList);
  calculatePrice();
}

export function setNewSubSystemsList(newList: CheckboxItem[]) {
  subSystemsList = newList;
  renderSubSystemsList(subSystemsList);
  calculatePrice();
}

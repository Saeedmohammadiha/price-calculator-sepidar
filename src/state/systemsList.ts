import { renderSystemsList } from "../chekboxesList";
import { calculatePrice } from "../PriceCalculator";

export let systemsList: CheckboxItem[] = [
  {
    id: "sys_1",
    name: "سیستم حسابداری",
    price: "99000000",
    checked: true,
  },
  {
    id: "sys_2",
    name: "سیستم دارایی ثابت",
    price: "167000000",
    checked: false,
  },
  {
    id: "sys_3",
    name: "سیستم دریافت و پرداخت",
    price: "156000000",
    checked: false,
  },
  {
    id: "sys_4",
    name: "سیستم تامین کنندگان و انبار تولیدی",
    price: "210000000",
    checked: false,
  },
  {
    id: "sys_5",
    name: "سیستم حقوق و دستمزد",
    price: "204000000",
    checked: false,
  },
  {
    id: "sys_6",
    name: "سیستم مشتریان و فروش",
    price: "210000000",
    checked: false,
  },
  {
    id: "sys_7",
    name: "سیستم تامین کنندگان و انبار بازرگانی",
    price: "185000000",
    checked: false,
  },
  {
    id: "sys_8",
    name: "سیستم فروش خدماتی",
    price: "195000000",
    checked: false,
  },
  {
    id: "sys_9",
    name: "حسابداری پیمانکاری",
    price: "235000000",
    checked: false,
  },
  {
    id: "sys_10",
    name: "سیستم تولید",
    price: "203000000",
    checked: false,
  },
  {
    id: "sys_11",
    name: "سیستم سفارش گیری",
    price: "252000000",
    checked: false,
  },
  {
    id: "sys_12",
    name: "سیستم پخش سرد",
    price: "405000000",
    checked: false,
  },
  {
    id: "sys_13",
    name: "سیستم پخش گرم",
    price: "405000000",
    checked: false,
  },
  {
    id: "sys_14",
    name: "سیستم سفارشات و خرید خارجی",
    price: "240000000",
    checked: false,
  },
  {
    id: "sys_15",
    name: "سیستم سامانه مؤدیان",
    price: "99000000",
    checked: false,
  },
];

export function updateSystemsList(updatedItem: CheckboxItem) {
  const index = systemsList.findIndex((item) => item.id === updatedItem.id);
  if (index !== -1) {
    systemsList[index] = updatedItem;
  }

  renderSystemsList(systemsList);
  calculatePrice();
}

import { renderSubSystemsList } from "../chekboxesList";
import { calculatePrice } from "../PriceCalculator";

export let subSystemsList: CheckboxItem[] = [
  {
    id: "subSys_1",
    name: "زیر سیستم ارزی",
    price: "117000000",
    checked: false,
    post: [],
    pre: [],
    preSub: [],
    preOR: [],
    preSubOR: [],
    postSub: [],
    textForModal: [],
  },
  {
    id: "subSys_2",
    name: "فروش پیشرفته",
    price: "150000000",
    checked: false,
    post: ["sys_11","sys_12","sys_13"],
    pre: [],
    preSub: [],
    preOR: ["sys_6", "sys_8"],
    preSubOR: [],
    postSub: [],
    textForModal: ["سیستم مشتریان و فروش یا سیستم فروش خدماتی"],
  },
  {
    id: "subSys_3",
    name: "زیر سیستم توزین",
    price: "77000000",
    checked: false,
    post: [],
    pre: [],
    preSub: [],
    preOR: ["sys_4", "sys_7"],
    preSubOR: [],
    postSub: [],
    textForModal: [
      "سیستم تامین کنندگان و انبار تولیدی یا سیستم تامین کنندگان و انبار بازرگانی",
    ],
  },
  {
    id: "subSys_4",
    name: "زیر سیستم دو زبانه",
    price: "161000000",
    checked: false,
    post: [],
    pre: [],
    preSub: [],
    preOR: [],
    preSubOR: [],
    postSub: [],
    textForModal: [],
  },
  {
    id: "subSys_5",
    name: "مدیریت پیام",
    price: "35000000",
    checked: false,
    post: [],
    pre: [],
    preSub: [],
    preOR: [],
    preSubOR: [],
    postSub: [],
    textForModal: [],
  },
  {
    id: "subSys_6",
    name: "زیر سیستم ردیابی",
    price: "59000000",
    checked: false,
    post: [],
    pre: [],
    preSub: [],
    preOR: ["sys_4", "sys_7"],
    preSubOR: [],
    postSub: [],
    textForModal: [
      "سیستم تامین کنندگان و انبار تولیدی یا سیستم تامین کنندگان و انبار بازرگانی",
    ],
  },
  {
    id: "subSys_7",
    name: "زیر سیستم دو واحدی",
    price: "78000000",
    checked: false,
    post: [],
    pre: [],
    preSub: [],
    preOR: ["sys_4", "sys_7"],
    preSubOR: [],
    postSub: [],
    textForModal: [
      "سیستم تامین کنندگان و انبار تولیدی یا سیستم تامین کنندگان و انبار بازرگانی",
    ],
  },
  {
    id: "subSys_8",
    name: "تبدیل انبار بازرگانی به تولیدی",
    price: "72000000",
    checked: false,
    post: [],
    pre: ["sys_7"],
    preSub: [],
    preOR: [],
    preSubOR: [],
    postSub: [],
    textForModal: ["سیستم تامین کنندگان و انبار بازرگانی"],
  },
  {
    id: "subSys_9",
    name: "زیر سیستم موبایل و تبلت سفارش گیری",
    price: "164000000",
    checked: false,
    post: [],
    pre: ["sys_11"],
    preSub: [],
    preOR: [],
    preSubOR: [],
    postSub: [],
    textForModal: ["سیستم سفارش گیری"],
  },
  {
    id: "subSys_10",
    name: "وب سرویس فروشگاه اینترنتی",
    price: "345000000",
    checked: false,
    post: [],
    pre: [],
    preSub: [],
    preOR: ["sys_6", "sys_8"],
    preSubOR: [],
    postSub: [],
    textForModal: ["سیستم مشتریان و فروش یا یا سیستم فروش خدماتی"],
  },
  {
    id: "subSys_11",
    name: "زیر سیستم مدیریت تنخواه گردان",
    price: "55000000",
    checked: false,
    post: [],
    pre: ["sys_3"],
    preSub: [],
    preOR: [],
    preSubOR: [],
    postSub: [],
    textForModal: ["سیستم سفارش گیری"],
  },
  {
    id: "subSys_12",
    name: "زیر سیستم گزارش‌های مدیریتی",
    price: "72000000",
    checked: false,
    post: [],
    pre: [],
    preSub: [],
    preOR: ["sys_3", "sys_4", "sys_6", "sys_7"],
    preSubOR: [],
    postSub: [],
    textForModal: [
      "سیستم دریافت پرداخت یا سیستم مشتریان و فروش یا سیستم تامین کنندگان و انبار تولیدی یا سیستم تامین کنندگان و انبار بازرگانی",
    ],
  },
  {
    id: "subSys_13",
    name: "تبدیل فروش خدماتی به مشتریان و فروش",
    price: "24700000",
    checked: false,
    post: [],
    pre: ["sys_3"],
    preSub: [],
    preOR: ["sys_4", "sys_7"],
    preSubOR: [],
    postSub: [],
    textForModal: [
      "سیستم دریافت و پرداخت",
      "سیستم تامین کنندگان و انبار تولیدی یا سیستم تامین کنندگان و انبار بازرگانی",
    ],
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

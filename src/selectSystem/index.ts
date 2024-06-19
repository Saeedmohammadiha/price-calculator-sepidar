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
}

export function selectOnChangeHandler() {
  //change the selected checkboxes to the selected system
}

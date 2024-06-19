

export function addOptionsToSharedCompaniesSelect() {
    const values = [
      { id: "0", value: "0", text: "0" },
      { id: "1", value: "1", text: "1" },
      { id: "2", value: "2", text: "2" },
      { id: "3", value: "3", text: "3" },
      { id: "4", value: "4", text: "4" },
      { id: "5", value: "5", text: "5" },
      { id: "6", value: "6", text: "6" },
      { id: "7", value: "7", text: "7" },
      { id: "8", value: "8", text: "8" },

    ];
  
    const select = document.getElementById("sharedCompaniesSelect");
  
    values.map((value) => {
      const option = document.createElement("option");
      option.value = value.value;
      option.text = value.text;
      select?.appendChild(option);
    });
  
    select!.addEventListener("change", sharedCompaniesSelectOnChangeHandler);
  }
  
  export function sharedCompaniesSelectOnChangeHandler(event: Event) {
    const price = 1511000000;
    const value = (event.target as HTMLInputElement).value;
   
    document.getElementById("sharedCompaniesSelectPrice")!.innerHTML = (
      Number(value) * price
    ).toString();
  }
  
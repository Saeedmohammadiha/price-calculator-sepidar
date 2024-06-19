export function selectSystem() {
  const select = document.getElementById("systemsSelect");

  const values = [
    { value: "1", text: "System 1" },
    { value: "2", text: "System 2" },
    { value: "3", text: "System 3" },
  ];


  values.map((value) => {
    const option = document.createElement("option");
    option.value = value.value;
    option.text = value.text;
    select?.appendChild(option);
  });
  
}


export function selectOnChangeHandler(){
    //change the selected checkboxes to the selected system
}
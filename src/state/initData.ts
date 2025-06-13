import { subSystemsList } from "./subSystemsList";
import { systemsList } from "./systemsList";

export function initData() {
  /////////////////////////
  systemsList.forEach((sys) => {
    const i = window.ourData.systemsList.find((s) => s.id === sys.id);
    sys.price = i!.price;
  });

  /////////////////////////
  subSystemsList.forEach((subSys) => {
    const i = window.ourData.subSystemsList.find((s) => s.id === subSys.id);
    subSys.price = i!.price;
  });

  //////////////////////////
  const onePc = document.getElementById("onePc");
  onePc!.innerHTML = window.ourData.htmlDataOnePc.price;

  //////////////////////////
  const morePc = document.getElementById("morePc");
  morePc!.innerHTML = window.ourData.htmlDataMorePc.price;

  //////////////////////////
  const installService = document.getElementById("installService");
  installService!.innerHTML = window.ourData.htmlDataInstallService.price;

  //////////////////////////
  const hourlyService = document.getElementById("hourlyService");
  hourlyService!.innerHTML = window.ourData.htmlDataHourlyService.price;
}

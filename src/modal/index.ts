export const modal = document.getElementById("modal");

document
  .getElementById("closeModalButton")
  ?.addEventListener("click", () => toggleModal(false));

export function toggleModal(show: boolean, content?: string[]) {
  if (show) {
    modal!.classList.remove("hidden");
    const contenetContainer = document.getElementById("modalContent");
    const textList = content?.map((text) => {
      const regex = new RegExp(`(${" یا "})`, 'g');
      const newText = text.replace(regex, '<span class="highlightYa">$1</span>');      
      return `<li>${newText}</li>`;
    });
    contenetContainer!.innerHTML = `<ul class="list-disc">${textList?.join(" ")}</ul>`;
  } else {
    modal!.classList.add("hidden");
    const contenetContainer = document.getElementById("modalContent");
    contenetContainer!.innerHTML = "";
  }
}

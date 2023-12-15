export default function Field(id, type, label, size = 1) {
  const container = document.createElement("div");
  container.setAttribute("class", "w-full relative mb-6");

  if(size > 1) {
    container.classList.add("col-span-2")
  }

  container.innerHTML = `
        <input
            class="w-full p-1 rounded bg-white border border-gray-500 mb-6 focus-visible:outline-0 focus-visible:border-sky-500 focus-visible:placeholder:invisible peer"
            name="${id}" id="${id}" placeholder="${label} *" type="${type}" required>
            <label id="lbl-${id}" data-help="* This is a required field"
                class="opacity-0 peer-focus-visible:opacity-100 peer-focus-visible:animate-fade py-1 absolute bottom-[3.5rem] left-1 text-gray-700 peer-valid:opacity-100 peer-focus-visible:after:content-[attr(data-help)] peer-focus-visible:peer-invalid:after:animate-help peer-focus-visible:peer-valid:after:opacity-0 transition-all after:absolute after:left-0 after:top-16 after:whitespace-nowrap"
                for="${id}">${label}
            </label>
    
    `;

    return container;
}

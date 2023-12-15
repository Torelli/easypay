export default function Field(id, type, label, size = 1) {
  const container = document.createElement("div");
  container.setAttribute("class", "w-full relative mb-2");

  if (size > 1) {
    container.classList.add("col-span-2");
    container.innerHTML = `
        <input
            class="form-field w-full py-1 pl-1 pr-8 rounded bg-white border border-gray-500 mb-6 focus-visible:outline-0 focus-visible:border-sky-500 focus-visible:placeholder:invisible peer"
            name="${id}" id="${id}" placeholder="${label} *" type="${type}" required>
            <label id="lbl-${id}" data-help="* This is a required field"
                class="opacity-0 peer-focus-visible:opacity-100 peer-focus-visible:animate-fade py-1 absolute bottom-[3.5rem] left-1 text-gray-700 peer-valid:opacity-100 peer-valid:after:content-['✔'] peer-valid:after:opacity-100 peer-valid:after:top-9 peer-valid:after:left-[26.5rem] peer-focus-visible:peer-invalid:after:content-[attr(data-help)] peer-focus-visible:peer-invalid:after:animate-help transition-all after:absolute after:left-0 after:top-16 after:text-sm after:whitespace-nowrap"
                for="${id}">${label}
            </label>
    
    `;
  } else {
    container.innerHTML = `
        <input
            class="form-field w-full py-1 pl-1 pr-8 rounded bg-white border border-gray-500 mb-6 focus-visible:outline-0 focus-visible:border-sky-500 focus-visible:placeholder:invisible peer"
            name="${id}" id="${id}" placeholder="${label} *" type="${type}" required>
            <label id="lbl-${id}" data-help="* This is a required field"
                class="opacity-0 peer-focus-visible:opacity-100 peer-focus-visible:animate-fade py-1 absolute bottom-[3.5rem] left-1 text-gray-700 peer-valid:opacity-100 peer-valid:after:content-['✔'] peer-valid:after:opacity-100 peer-valid:after:top-9 peer-valid:after:left-48 peer-focus-visible:peer-invalid:after:content-[attr(data-help)] peer-focus-visible:peer-invalid:after:animate-help transition-all after:absolute after:left-0 after:top-16 after:text-sm after:whitespace-nowrap"
                for="${id}">${label}
            </label>
    
    `;
  }

  return container;
}

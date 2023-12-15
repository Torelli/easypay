export default function SelectField(id, label, options, size = 1) {
  const container = document.createElement("div");
  container.setAttribute("class", "w-full relative mb-6");

  if (size > 1) {
    container.classList.add("col-span-2");
  }

  const select = document.createElement("select");
  select.setAttribute(
    "class",
    "form-field bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus-visible:outline-0 focus-visible:border-sky-500 block w-full p-1"
  );
  select.required = true;
  select.innerHTML = `<option value="" selected>${label}</option>`;

  for (let option of options) {
    select.innerHTML += `
        <option value="${option.value}">${option.name}</option>
        `;
  }

  container.appendChild(select);

  return container;
}

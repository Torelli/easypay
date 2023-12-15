import { phoneOptions, stateOptions } from "../dummyObjects/dummyObjects";
import Field from "./Field";
import SelectField from "./SelectField";

export default function Form() {
  const container = document.createElement("div");
  container.setAttribute("class","pt-4");
  container.innerHTML = `
    <h2 class="mb-6 text-3xl text-left font-semibold text-gray-600 border-b-2 border-b-slate-600">Buyer info</h2>
  `;

  const form = document.createElement("form");
  form.setAttribute("class","mt-8 grid grid-cols-2 gap-4")


  form.appendChild(Field("firstName", "text", "First name"));
  form.appendChild(Field("lastName", "text", "Last name"));
  form.appendChild(Field("email", "email", "Email", 2));
  form.appendChild(SelectField("country","Country/Region", [{value: "US", name:"United States"}], 2));
  form.appendChild(SelectField("phoneType","Phone type", phoneOptions));
  form.appendChild(Field("phoneNumber", "tel", "Phone number"));
  form.appendChild(Field("streetAddress1", "text", "Street address"));
  form.appendChild(Field("streetAddress2", "text", "Apt., ste., bldg."));
  form.appendChild(Field("city", "text", "City"));
  form.appendChild(SelectField("state","State", stateOptions));
  form.appendChild(Field("zipCode", "number", "Zip code", 2));

  container.appendChild(form);

  return container;
}

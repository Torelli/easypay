export default function Items(items) {
    const container = document.createElement("div");
    let domItems = '';

    for(let item of items) {
        domItems += `
        <div class="mt-8 bg-white p-4 border border-gray-500 rounded ">
        <div class="flow-root">
          <ul role="list" class="-my-6 divide-y divide-gray-200">
            <li class="flex py-6">
              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-400">
                <img src="${item.picture}" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
              </div>

              <div class="ml-4 flex flex-1 flex-col">
                <div>
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="#">${item.name}</a>
                    </h3>
                    <p class="ml-4">${item.price}</p>
                  </div>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <p class="text-gray-500 flex justify-around items-center gap-2"><button class="drop-shadow rounded-full hover:bg-gray-200"><i class="px-2 py-2 border border-gray-500 rounded-full fa-solid fa-plus"></i></button><input class="bg-white border border-gray-500 text-center h-10 w-10 px-2 pr-2 rounded-full text-sm focus:outline-none" type="number" value="1" disabled><button class="drop-shadow rounded-full hover:bg-gray-200"><i class="px-2 py-2 border border-gray-500 rounded-full fa-solid fa-minus"></i></button></p>

                  <div class="flex">
                    <button type="button" class="font-medium text-sky-600 hover:text-sky-500 cursor-not-allowed">Remove</button>
                  </div>
                </div>
              </div>
            </li>
        `
    }

    container.innerHTML = domItems;

    return container;
}
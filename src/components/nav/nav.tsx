import { component$ } from "@builder.io/qwik"

export default component$(() => {
    return (
        <div class="flex sticky width-full bg-inherit text-white top-0 py-3 flex-wrap justify-around bg-silver items-center opacity-75">
        <h1 class="text-xl font-semibold text-white">KittenHost</h1>
        <div class="w-1/2"></div>
        <ul class="flex gap-[40px] text-m text-white">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    )
})
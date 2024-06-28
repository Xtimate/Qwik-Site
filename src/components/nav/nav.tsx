import { component$ } from "@builder.io/qwik"

export default component$(() => {
    return (
        <div class="flex width-full bg-black backdrop-blur-md text-white top-0 py-3 flex-wrap justify-around bg-silver items-center opacity-75">
        <h1 class="text-lg font-semibold text-white">KittenHost</h1>
        <ul class="flex gap-[40px] text-m text-white">
          <li>Home</li>
          <li>product</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    )
})
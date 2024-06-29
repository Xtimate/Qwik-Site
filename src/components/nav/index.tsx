import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="sticky top-0 w-full bg-gray-900 text-white py-3 flex items-center justify-around opacity-75">
      <h1 class="text-xl font-semibold">KittenHost</h1>
      <div class="w-1/2"></div>
      <ul class="flex gap-10 text-base">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
});

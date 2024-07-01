import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="sticky top-0 w-full bg-gray-900 text-white py-3 flex items-center justify-around opacity-75">
      <h1 class="text-xl font-semibold">KittenHost</h1>
      <div class="w-1/2"></div>
      <ul class="flex gap-10 text-base items-center">
        <li><a href="#about" class="text-white">About</a></li>
        <li><a href="#features" class="text-white">Features</a></li>
        <li><a href="#plans" class="text-white">Pricing</a></li>
        <li>
          <a href="https://billing.kittendev.xyz" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Billing
          </a>
        </li>
      </ul>
    </div>
  );
});

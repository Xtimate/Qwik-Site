import { component$ } from "@builder.io/qwik";
import Nav from "../nav/index";

export default component$(() => {
  return (
    <section class="bg-gray-900 text-white bg-gradient-to-br from-indigo-500 to-black-400 min-h-screen flex flex-col">
      <Nav />
      <div class="flex-grow flex items-center justify-center">
        <div class="max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl leading-tight h-14">
              Fair hosting for everyone
            </h1>
            <p class="mt-4 max-w-xl mx-auto text-base sm:text-xl leading-relaxed">
              At KittenHost, we believe in fair hosting for everyone, unlike big providers. Anyone can afford our hosting without breaking the bank.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full sm:w-auto px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded transition duration-1000 backdrop-blur-sm hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="#plans"
              >
                View Plans
              </a>
              <a
                class="block w-full sm:w-auto px-12 py-3 text-sm font-medium text-white bg-transparent border border-blue-600 rounded transition duration-1000 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500"
                href="#features"
              >
                Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

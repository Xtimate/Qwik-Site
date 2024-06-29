import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="flex flex-col items-center space-y-6 justify-center m-10 bg-gray-900 text-white">
      <nav class="flex justify-center flex-wrap gap-6">
        <a class="hover:text-gray-300" href="#">Home</a>
        <a class="hover:text-gray-300" href="https://billing.kittendev.xyz">Billing</a>
        <a class="hover:text-gray-300" href="https://panel.kittendev.xyz:8090/">Panel</a>
        <a class="hover:text-gray-300" href="#">Terms & Conditions</a>
        <a class="hover:text-gray-300" href="#">Privacy Policy</a>
      </nav>
      <br></br>
      <p class="text-center text-gray-300 font-medium">&copy; 2024 KittenHost. All rights reserved.</p>

      <p class="text-center text-gray-300 font-medium mt-1">Made with 💙 by CodingKitten & Xtimate</p>
    </footer>
  );
});

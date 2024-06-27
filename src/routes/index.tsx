import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../components/hero/index"
import Plans from "~/components/plans/index";
import Space from "../components/space/index";

export default component$(() => {
  return (
    <div>
    <Hero />
    <Plans />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

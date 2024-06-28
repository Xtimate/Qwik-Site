import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../components/hero/index"
import Plans from "~/components/plans/index";
import Nav from "../components/nav/nav"

export default component$(() => {
  return (
    <div>
    <Nav />
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

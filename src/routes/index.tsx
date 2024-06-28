// src/index.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../components/hero/index"
import { FeaturesComponent } from "../components/features/index"
import Plans from "~/components/plans/index";
import Nav from "../components/nav/nav"

export default component$(() => {
  return (
    <div>
    <Nav />
    <Hero />
    <FeaturesComponent />
    <Plans />
    </div>
  );
});

export const head: DocumentHead = {
  title: "KittenHost",
  meta: [
    {
      name: "KittenHost - Fair web hosting for everyone.",
      content: "At kitten host we stand for affortable hosting for everyone.",
    },
  ],
};
// src/index.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../components/hero/index"
import { FeaturesComponent } from "../components/features/index"
import Plans from "~/components/plans/index";

export default component$(() => {
  return (
    <div>
      <Hero />
      <FeaturesComponent />
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
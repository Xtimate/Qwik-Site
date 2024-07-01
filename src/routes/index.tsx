import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "../components/hero/index";
import { FeaturesComponent } from "../components/features/index";
import Plans from "~/components/plans/index";
import Footer from "~/components/footer/index";
import { AboutUsComponent } from "../components/about/index"

export default component$(() => {
  return (
    <div>
      <Hero />
      <AboutUsComponent />
      <FeaturesComponent />
      <Plans />
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "KittenHost",
  meta: [
    {
      name: "description",
      content: "KittenHost - Fair web hosting for everyone.",
    },
  ],
};

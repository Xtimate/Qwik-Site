import { component$ } from "@builder.io/qwik";

export const FeaturesComponent = component$(() => {
  return (
    <section id="features" class="bg-gray-900 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
            Features
          </h2>
          <p class="mt-4 text-xl text-gray-400">
            Explore our key features below
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Developer Friendly"
            description="Our web hosting services are designed for developers and made by developers."
            icon="terminal.svg"
          />
          <Feature
            title="Affordable Pricing"
            description="Get competitive pricing without compromising on quality or performance."
            icon="dollar.svg"
          />
          <Feature
            title="Powerful Hardware"
            description="Experience superior performance with our modern and powerful hardware."
            icon="server.svg"
          />
          <Feature
            title="DDoS Protection"
            description="Keep your websites safe from malicious attacks with our advanced DDoS protection."
            icon="shield.svg"
          />
          <Feature
            title="Instant Applications"
            description="Deploy your favorite applications instantly with our 1-click installer, saving you time and effort."
            icon="apps.svg"
          />
          <Feature
            title="Customer Focused"
            description="Our dedicated support team is always available to help you with any questions or issues, ensuring a seamless experience."
            icon="handshake.svg"
          />
        </div>
      </div>
    </section>
  );
});

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature = component$(({ title, description, icon }: FeatureProps) => {
  return (
    <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
      <div class="text-2xl text-gray-400">
        <img src={icon} alt={title} width="24" height="24" />
      </div>
      <div class="mt-4 mb-8">
        <h3 class="text-2xl font-semibold text-white">{title}</h3>
        <p class="mt-4 text-gray-400">{description}</p>
      </div>
    </div>
  );
});

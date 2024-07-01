import { component$ } from "@builder.io/qwik";

export const AboutUsComponent = component$(() => {
  return (
    <section id="about" class="bg-gray-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
            About Us
          </h2>
          <p class="mt-4 text-xl text-gray-400">
            Learn more about KittenHost and our mission.
          </p>
        </div>

        <div class="space-y-16">
          {/* Our Mission Section */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="flex justify-center md:justify-end">
              <img
                src="mission.svg"
                alt="Our Mission"
                width="256"
                height="256"
                class="w-64 h-64"
              />
            </div>
            <div class="text-center md:text-left">
              <h3 class="text-3xl font-semibold text-white">Our Mission</h3>
              <p class="mt-4 text-gray-400">
                At KittenHost, our mission is to provide reliable and affordable
                web hosting services to help you succeed online.
              </p>
            </div>
          </div>

          {/* Our Values Section */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1 text-center md:text-right">
              <h3 class="text-3xl font-semibold text-white">Our Values</h3>
              <p class="mt-4 text-gray-400">
                We believe in transparency, integrity, and exceptional customer
                service. These values guide everything we do.
              </p>
            </div>
            <div class="flex justify-center md:justify-start order-1 md:order-2">
              <img
                src="values.svg"
                alt="Our Values"
                width="256"
                height="256"
                class="w-64 h-64"
              />
            </div>
          </div>

          {/* Our Team Section */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="flex justify-center md:justify-end">
              <img
                src="team.svg"
                alt="Our Team"
                width="256"
                height="256"
                class="w-64 h-64"
              />
            </div>
            <div class="text-center md:text-left">
              <h3 class="text-3xl font-semibold text-white">Our Team</h3>
              <p class="mt-4 text-gray-400">
                Our team is composed of passionate professionals dedicated to
                ensuring your web hosting experience is smooth and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

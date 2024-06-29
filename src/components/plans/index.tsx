import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section id="plans" class="bg-gray-900 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-extrabold text-white sm:text-5xl">
                        Pricing Plans
                    </h2>
                    <p class="mt-4 text-xl text-gray-400">
                        Simple, transparent pricing for your business needs.
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Basic Plan */}
                    <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div class="mb-8">
                            <h3 class="text-2xl font-semibold text-white">Basic</h3>
                            <p class="mt-4 text-gray-400">Get started with our basic features.</p>
                        </div>
                        <div class="mb-8">
                            <span class="text-5xl font-extrabold text-white">$1</span>
                            <span class="text-xl font-medium text-gray-400">/mo</span>
                        </div>
                        <ul class="mb-8 space-y-4 text-gray-400">
                            {["1 GB Storage", "10 GB Bandwidth", "1 Mail Box", "Free SSL", "One Click App Install", "SFTP/FTP Access"].map((feature, index) => (
                                <li key={index} class="flex items-center">
                                    <img src="check.svg" class="h-6 w-6 text-green-500 mr-2" width="24" height="24" alt="check icon"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="https://billing.kittendev.xyz/basic" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                            Choose Basic
                        </a>
                    </div>

                    {/* Premium Plan */}
                    <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div class="mb-8">
                            <h3 class="text-2xl font-semibold text-white">Premium</h3>
                            <p class="mt-4 text-gray-400">Perfect for small businesses and startups.</p>
                        </div>
                        <div class="mb-8">
                            <span class="text-5xl font-extrabold text-white">$4</span>
                            <span class="text-xl font-medium text-gray-400">/mo</span>
                        </div>
                        <ul class="mb-8 space-y-4 text-gray-400">
                            {["4 GB Storage", "Unlimited Bandwidth", "4 Mail Boxes", "Free SSL", "One Click App Install", "SFTP/FTP Access"].map((feature, index) => (
                                <li key={index} class="flex items-center">
                                    <img src="check.svg" class="h-6 w-6 text-green-500 mr-2" width="24" height="24" alt="check icon"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="https://billing.kittendev.xyz/premium" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                            Choose Premium
                        </a>
                    </div>

                    {/* Ultra Plan */}
                    <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div class="mb-8">
                            <h3 class="text-2xl font-semibold text-white">Ultra</h3>
                            <p class="mt-4 text-gray-400">Ideal for growing businesses and enterprises.</p>
                        </div>
                        <div class="mb-8">
                            <span class="text-5xl font-extrabold text-white">$10</span>
                            <span class="text-xl font-medium text-gray-400">/mo</span>
                        </div>
                        <ul class="mb-8 space-y-4 text-gray-400">
                            {["10 GB Storage", "Unlimited Bandwidth", "8 Mail Boxes", "Free SSL", "One Click App Install", "SFTP/FTP Access", "SSH Access"].map((feature, index) => (
                                <li key={index} class="flex items-center">
                                    <img src="check.svg" class="h-6 w-6 text-green-500 mr-2" width="24" height="24" alt="check icon"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="https://billing.kittendev.xyz/ultra" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                            Choose Ultra
                        </a>
                    </div>

                    {/* Enterprise Plan */}
                    <div class="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div class="mb-8">
                            <h3 class="text-2xl font-semibold text-white">Enterprise</h3>
                            <p class="mt-4 text-gray-400">Tailored for large-scale deployments and custom needs.</p>
                        </div>
                        <div class="mb-8">
                            <span class="text-5xl font-extrabold text-white">Custom</span>
                        </div>
                        <ul class="mb-8 space-y-4 text-gray-400">
                            {["Custom GB Storage", "Unlimited Bandwidth", "Custom Mail Boxes", "Free SSL", "One Click App Install", "SFTP/FTP Access", "SSH Access"].map((feature, index) => (
                                <li key={index} class="flex items-center">
                                    <img src="check.svg" class="h-6 w-6 text-green-500 mr-2" width="24" height="24" alt="check icon"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="https://billing.kittendev.xyz/support" class="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                            Open a ticket
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

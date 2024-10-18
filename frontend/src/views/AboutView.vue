<template>
    <div class="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"  style="background-image: url('/assets/background.jpg'); background-size: cover; background-position: center; background-attachment: fixed;">

    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0 bg-gray-600 md:w-56">
          <div class="h-full flex items-center justify-center">
            <img class="h-48 w-48 object-cover rounded-full border-4 border-white" src="/assets/logo2.png" alt="Burger Palace logo">
          </div>
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-gray-500 font-semibold">Est. 2010</div>
          <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">About Burger Palace</h1>
          <p class="mt-4 max-w-2xl text-xl text-gray-500">Crafting the perfect burger experience since 2010</p>

          <div class="mt-8 space-y-6 text-gray-700">
            <p>
              Welcome to Burger Palace, where passion meets the grill! Our journey began in 2010 with a simple dream: to serve the juiciest, most flavorful burgers in town. From our humble beginnings as a food truck to our current status as a beloved local institution, we've never lost sight of what matters most - delivering an unforgettable dining experience to every customer who walks through our doors.
            </p>
            <h2 class="text-2xl font-bold text-gray-900">Our Philosophy</h2>
            <p>
              At Burger Palace, we believe that a great burger is more than just a meal - it's an art form. That's why we source only the finest, locally-sourced ingredients, from our premium beef patties to our freshly baked buns. Our chefs are constantly innovating, creating unique flavor combinations that push the boundaries of what a burger can be.
            </p>
            <h2 class="text-2xl font-bold text-gray-900">Community First</h2>
            <p>
              We're proud to be a part of this community, and we strive to give back whenever we can. From sponsoring local sports teams to participating in charity events, we're committed to making a positive impact beyond our restaurant walls.
            </p>
            <h2 class="text-2xl font-bold text-gray-900">Join Us</h2>
            <p>
              Whether you're a burger aficionado or just looking for a delicious meal in a warm, welcoming atmosphere, we invite you to join us at Burger Palace. Come taste the difference that passion, quality ingredients, and a commitment to excellence can make. Your perfect burger awaits!
            </p>
          </div>

          <div class="mt-10">
            <h3 class="text-lg font-medium text-gray-900">Find Us</h3>
            <div class="mt-2 flex items-center text-gray-600">
              <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="ml-2">123 Burger Street, Foodville, FL 12345</span>
            </div>
            <div class="mt-2 flex items-center text-gray-600">
              <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="ml-2">(555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  // You can add any necessary component logic here
}
</script>

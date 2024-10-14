<template>
  <nav class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">

      <!-- Logo and Title Section -->
      <div class="flex items-center space-x-4">
        <!-- Logo -->
        <img
          src="/assets/logo.jpg"
          alt="Royal Burger Logo"
          class="w-12 h-12 rounded-full object-cover shadow-lg"
        />

        <!-- Title -->
        <a href="#" class="text-2xl font-bold">Royal Burger</a>
      </div>

      <!-- Navigation Links -->
      <ul class="hidden md:flex space-x-8">
        <li>
          <a href="#home" class="hover:text-red-600 transition duration-300">Home</a>
        </li>
        <li>
          <a href="#menu" class="hover:text-red-600 transition duration-300">Menu</a>
        </li>
        <li>
          <a href="#about" class="hover:text-red-600 transition duration-300">About Us</a>
        </li>
        <li>
          <a href="#contact" class="hover:text-red-600 transition duration-300">Contact</a>
        </li>
      </ul>

      <!-- Action Buttons -->
      <div class="hidden md:flex space-x-4">
        <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-500 transition duration-300">Order Now</a>
        <a href="#" class="bg-green-600 px-4 py-2 rounded-lg hover:bg-white hover:text-green-600 transition duration-300">Login</a>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-800 text-white">
      <ul class="space-y-4 p-4">
        <li><a href="#home" class="block text-red-400">Home</a></li>
        <li><a href="#menu" class="block text-red-400">Menu</a></li>
        <li><a href="#about" class="block text-red-400">About Us</a></li>
        <li><a href="#contact" class="block text-red-400">Contact</a></li>
        <li>
          <a href="#" class="block bg-red-500 text-black px-4 py-2 mt-2 rounded-lg text-center">Order Now</a>
        </li>
        <li>
          <a href="#" class="block bg-red-600 px-4 py-2 mt-2 rounded-lg text-center">Login</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style scoped>
/* Custom styles can be added here */
</style>


<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-extrabold text-gray-800 mb-4">Coming Soon!</h1>
      <p class="text-xl text-gray-600 mb-8">
        We're working hard to bring you something amazing. Stay tuned!
      </p>

      <form @submit.prevent="subscribe" class="mb-4">
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          required
          class="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          class="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-500 transition duration-300"
        >
          Subscribe
        </button>
      </form>

      <div class="flex justify-center space-x-4">
        <a href="#" class="text-gray-600 hover:text-red-600 transition duration-300">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="text-gray-600 hover:text-red-600 transition duration-300">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="text-gray-600 hover:text-red-600 transition duration-300">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="text-gray-600 hover:text-red-600 transition duration-300">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    subscribe() {
      // Implement your subscription logic here
      alert(`Subscribed with: ${this.email}`);
      this.email = ''; // Clear the input field after subscription
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>


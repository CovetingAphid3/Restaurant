<template>
  <footer class="bg-black text-gray-300 py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- About Section -->
        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Royal Burger</h3>
          <p class="mb-4">Indulge in the art of handcrafted succulent burgers - elevating your taste buds to a royal experience!</p>
          <p class="text-sm">Selous Ave & Carters Rd, Kimberley, South Africa</p>
          <p class="text-sm mt-1">Phone: <a href="tel:+0725298851" class="hover:text-yellow-400">072 529 8851</a></p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#menu" class="hover:text-yellow-400 transition duration-300">Menu</a></li>
            <li><a href="#about" class="hover:text-yellow-400 transition duration-300">About Us</a></li>
            <li><a href="#contact" class="hover:text-yellow-400 transition duration-300">Contact</a></li>
            <li><a href="#order" class="hover:text-yellow-400 transition duration-300">Order Online</a></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-yellow-400 transition duration-300">
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.197 21V9.304H6.47V7.033h2.728V4.983c0-2.341 1.3-3.537 3.293-3.537.993 0 2.031.18 2.031.18v2.33h-1.144c-1.13 0-1.478.7-1.478 1.416v1.662h2.54L14.23 9.304h-2.419V21"/></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-yellow-400 transition duration-300">
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.5 12.05c0-6.42-5.135-11.6-11.45-11.6-6.315 0-11.45 5.18-11.45 11.6 0 5.843 4.28 10.67 9.867 11.515v-8.13H7.548V12.05h3.371v-2.73c0-3.33 1.996-5.155 4.978-5.155 1.44 0 2.98.256 2.98.256v3.271h-1.676c-1.65 0-2.17 1.028-2.17 2.09v2.268h3.662l-.586 3.386h-3.076v8.13c5.587-.845 9.868-5.672 9.868-11.514"/></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-yellow-400 transition duration-300">
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.607 1.794-1.566 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.918 2.232-4.918 4.98 0 .39.045.765.13 1.124-4.083-.205-7.699-2.165-10.123-5.144-.423.725-.664 1.562-.664 2.456 0 1.693.856 3.184 2.157 4.06-.796-.025-1.545-.244-2.2-.609v.061c0 2.363 1.676 4.337 3.904 4.784-.408.11-.839.17-1.283.17-.314 0-.621-.03-.921-.085.63 1.965 2.445 3.395 4.6 3.435-1.683 1.32-3.808 2.107-6.102 2.107-.396 0-.788-.023-1.174-.068 2.179 1.403 4.768 2.22 7.557 2.22 9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.015-.637.964-.694 1.8-1.56 2.46-2.548z"/></svg>
            </a>
          </div>
        </div>

      </div>

      <!-- Copyright Section -->
      <div class="text-center text-sm mt-8">
        <p>&copy; 2024 Royal Burger. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>


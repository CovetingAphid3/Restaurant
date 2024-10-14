<template>
  <div class="font-sans bg-gray-100">

    <!-- Contact Header -->
    <header class="bg-gray-800 text-white py-20 text-center">
      <h1 class="text-5xl font-extrabold mb-4">Contact Us</h1>
      <p class="text-xl">We'd love to hear from you!</p>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
          <div class="space-y-4">
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt text-red-600 text-2xl mr-4"></i>
              <p>123 Burger Street, Foodville, FB 12345</p>
            </div>
            <div class="flex items-center">
              <i class="fas fa-phone text-red-600 text-2xl mr-4"></i>
              <p>(555) 123-4567</p>
            </div>
            <div class="flex items-center">
              <i class="fas fa-envelope text-red-600 text-2xl mr-4"></i>
              <p>info@royalburger.com</p>
            </div>
          </div>

          <h3 class="text-2xl font-bold mt-8 mb-4">Opening Hours</h3>
          <ul class="space-y-2">
            <li><span class="font-bold">Monday - Thursday:</span> 11:00 AM - 10:00 PM</li>
            <li><span class="font-bold">Friday - Saturday:</span> 11:00 AM - 11:00 PM</li>
            <li><span class="font-bold">Sunday:</span> 12:00 PM - 9:00 PM</li>
          </ul>

          <h3 class="text-2xl font-bold mt-8 mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-red-600 hover:text-red-800 transition duration-300">
              <i class="fab fa-facebook-square text-3xl"></i>
            </a>
            <a href="#" class="text-red-600 hover:text-red-800 transition duration-300">
              <i class="fab fa-instagram-square text-3xl"></i>
            </a>
            <a href="#" class="text-red-600 hover:text-red-800 transition duration-300">
              <i class="fab fa-twitter-square text-3xl"></i>
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block mb-1 font-bold">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              >
            </div>
            <div>
              <label for="email" class="block mb-1 font-bold">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              >
            </div>
            <div>
              <label for="subject" class="block mb-1 font-bold">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              >
            </div>
            <div>
              <label for="message" class="block mb-1 font-bold">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-red-600 text-white px-6 py-3 rounded-md font-bold hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>

    <!-- Map Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Find Us</h2>
        <div class="aspect-w-16 aspect-h-9">
          <img src="/assets/map.png" alt="Map" class="w-full h-full border border-black object-cover rounded-lg shadow-lg">
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.form)
      // Reset form after submission
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      // Show a success message to the user
      alert('Thank you for your message. We will get back to you soon!')
    }
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>

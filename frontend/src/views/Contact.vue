<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"  style="background-image: url('/assets/about.jpg'); background-size: cover; background-position: center; background-attachment: fixed;">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0 bg-gray-600 md:w-56">
          <div class="h-full flex items-center justify-center p-6">
            <h2 class="text-3xl font-bold text-white text-center">Get in Touch</h2>
          </div>
        </div>
        <div class="p-8 w-full">
          <h1 class="text-3xl font-extrabold text-gray-900 mb-6">Contact Burger Palace</h1>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-center text-gray-600">
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="ml-2">123 Burger Street, Foodville, FL 12345</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="ml-2">(555) 123-4567</span>
                </div>
                <div class="flex items-center text-gray-600">
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="ml-2">info@burgerpalace.com</span>
                </div>
              </div>

              <h3 class="text-lg font-medium text-gray-900 mt-8 mb-4">Hours of Operation</h3>
              <div class="space-y-2 text-gray-600">
                <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                <p>Sunday: 12:00 PM - 8:00 PM</p>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Send us a Message</h3>
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" v-model="form.name" required
                         class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" v-model="form.email" required
                         class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500">
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" v-model="form.message" rows="4" required
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"></textarea>
                </div>
                <button type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Here you would typically handle the form submission
      console.log('Form submitted:', this.form);
      // For demonstration purposes, we'll just show an alert
      alert(`Thank you for your message, ${this.form.name}! We'll get back to you soon.`);
      // Reset form fields
      this.form = { name: '', email: '', message: '' };
    }
  }
}
</script>

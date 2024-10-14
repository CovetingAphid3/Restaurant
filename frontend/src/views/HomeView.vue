<template>
  <div class="font-sans">

    <!-- Hero Section -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <img src="/assets/burger.jpg" alt="Hero Background" class="absolute z-0 w-full h-full object-cover" />
      <div class="absolute z-0 w-full h-full bg-black opacity-50"></div>
      <div class="z-10 text-center text-white">
        <h1 class="text-6xl font-extrabold mb-4">Taste the Royal Difference</h1>
        <p class="text-2xl mb-8">Gourmet burgers fit for a king</p>
        <a href="#menu" class="bg-yellow-400 text-red-900 px-8 py-3 rounded-full text-xl font-bold hover:bg-yellow-500 transition duration-300 transform hover:scale-105">Explore Our Menu</a>
      </div>
    </header>

    <!-- Featured Burgers Section -->
    <section id="featured" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Our Royal Selection</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="burger in featuredBurgers" :key="burger.name" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img :src="burger.image" :alt="burger.name" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">{{ burger.name }}</h3>
              <p class="text-gray-600 mb-4">{{ burger.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-red-600">${{ burger.price.toFixed(2) }}</span>
                <button class="bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-500 transition duration-300">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-16 bg-red-900 text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <img src="/assets/about.jpg" alt="About Royal Burger" class="rounded-lg shadow-lg" />
          </div>
          <div class="md:w-1/2 md:pl-12">
            <h2 class="text-4xl font-bold mb-6">Our Royal Story</h2>
            <p class="text-lg mb-6">Royal Burger has been serving gourmet burgers made with the finest ingredients. Our passion for quality and flavor has made us a local favorite.</p>
            <a href="#" class="inline-block bg-yellow-400 text-red-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition duration-300">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Reviews</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 class="font-bold">{{ testimonial.name }}</h3>
                <div class="text-yellow-400">
                  <i v-for="n in 5" :key="n" class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p class="text-gray-600">{{ testimonial.comment }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ... (rest of the template remains the same) ... -->

  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      featuredBurgers: [
        {
          name: 'The Royal Deluxe',
          description: 'Angus beef patty, truffle aioli, aged cheddar, and caramelized onions',
          price: 14.99,
          image: '/assets/hamburger.jpg'
        },
        {
          name: 'Crowned Chicken',
          description: 'Grilled chicken breast, avocado, bacon, and honey mustard sauce',
          price: 12.99,
          image: '/assets/chicken.jpg'
        },
        {
          name: 'Vegetarian Monarch',
          description: 'Plant-based patty, roasted vegetables, vegan cheese, and basil pesto',
          price: 13.99,
          image: '/assets/vegan.jpg'
        }
      ],
      testimonials: [
        {
          name: 'John D.',
          avatar: 'https://picsum.photos/seed/john/48/48',
          comment: 'Best burgers in town! The Royal Deluxe is my absolute favorite.'
        },
        {
          name: 'Sarah M.',
          avatar: 'https://picsum.photos/seed/sarah/48/48',
          comment: 'I love the variety of options. The Vegetarian Monarch is delicious!'
        },
        {
          name: 'Mike R.',
          avatar: 'https://picsum.photos/seed/mike/48/48',
          comment: 'Great atmosphere and even better food. Highly recommended!'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>

<template>
  <div class="font-sans">

    <!-- Hero Section -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <img src="/assets/burger.jpg" alt="Hero Background" class="absolute z-0 w-full h-full object-cover" />
      <div class="absolute z-0 w-full h-full bg-black opacity-50"></div>
      <div class="z-10 text-center text-white">
        <h1 class="text-6xl font-extrabold mb-4">Taste the Royal Difference</h1>
        <p class="text-2xl mb-8">Gourmet burgers fit for a king</p>
        <div class="flex justify-center">
          <RouterLink to="/menu" class="bg-yellow-400 text-red-900 px-8 py-3 rounded-full text-xl font-bold hover:bg-yellow-500 transition duration-300 transform hover:scale-105">Explore Our Menu</RouterLink>
          <RouterLink to="/contact" class="ml-4 bg-red-600 text-white px-8 py-3 rounded-full text-xl font-bold hover:bg-red-500 transition duration-300 transform hover:scale-105">Join Our Newsletter</RouterLink>
        </div>
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
              <p class="text-sm italic text-gray-500 mb-4">{{ burger.usp }}</p> <!-- Unique Selling Point -->
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-red-600">R{{ burger.price.toFixed(2) }}</span>
                <button class="bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-500 transition duration-300">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <img src="/assets/about.jpg" alt="About Royal Burger" class="rounded-lg shadow-lg" />
          </div>
          <div class="md:w-1/2 md:pl-12">
            <h2 class="text-4xl font-bold mb-6">Our Royal Story</h2>
            <p class="text-lg mb-6">Royal Burger has been serving gourmet burgers made with the finest ingredients. Our passion for quality and flavor has made us a local favorite.</p>
            <p class="text-md italic mb-6">Our mission is to provide delicious and sustainable meals for our community.</p> <!-- Mission Statement -->
            <RouterLink to="/about" class="inline-block bg-yellow-400 text-red-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition duration-300">Learn More</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section with Carousel -->
    <section id="testimonials" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
        <div class="flex flex-center overflow-x-auto space-x-4">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-6 rounded-lg shadow-lg flex-none w-64">
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

    <!-- Promotions Section -->
    <section id="promotions" class="py-16 bg-red-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Current Promotions</h2>
        <p class="mb-4">Get a free drink with every burger purchase!</p>
        <RouterLink to="/menu" class="bg-yellow-400 text-red-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition duration-300">Order Now</RouterLink>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2024 Royal Burger. All rights reserved.</p>
        <div class="flex justify-center mt-4">
          <RouterLink to="/about" class="mx-4 hover:text-yellow-400">About Us</RouterLink>
          <RouterLink to="/menu" class="mx-4 hover:text-yellow-400">Menu</RouterLink>
          <RouterLink to="/contact" class="mx-4 hover:text-yellow-400">Contact</RouterLink>
        </div>
        <div class="flex justify-center mt-4">
          <a href="https://facebook.com" class="mx-2 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" class="mx-2 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" class="mx-2 hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>

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
          price: 119.99,
          usp: 'Best-selling burger with a unique flavor twist!',
          image: '/assets/hamburger.jpg'
        },
        {
          name: 'Crowned Chicken',
          description: 'Grilled chicken breast, avocado, bacon, and honey mustard sauce',
          price: 129.99,
          usp: 'Perfectly grilled for maximum juiciness!',
          image: '/assets/chicken.jpg'
        },
        {
          name: 'Vegetarian Monarch',
          description: 'Plant-based patty, roasted vegetables, vegan cheese, and basil pesto',
          price: 89.99,
          usp: 'A favorite among vegetarians and meat-lovers alike!',
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


<template>
  <div class="font-sans">
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 bg-red-900 bg-opacity-95 z-50 flex items-center justify-center">
        <div class="text-center">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="toggleMobileMenu" class="block text-white text-xl py-4 hover:text-yellow-400 transition duration-300">{{ link.text }}</a>
        </div>
      </div>
    </transition>

    <!-- Hero Section -->
    <div class="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style="background-image: url('/assets/burger.jpg');">
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div class="relative z-10 text-center text-white max-w-4xl px-6">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 font-serif">Taste the Royal Difference</h1>
        <p class="text-xl md:text-3xl mb-10">Gourmet burgers crafted with passion, served with elegance</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <RouterLink to="/menu" class="bg-yellow-500 text-red-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 transition duration-300 transform hover:scale-105 shadow-lg">Explore Our Menu</RouterLink>
          <RouterLink to="/contact" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-red-900 transition duration-300 transform hover:scale-105">Reserve a Table</RouterLink>
        </div>
      </div>
    </div>

    <!-- Featured Burgers Section -->
    <section id="featured" class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16 font-serif text-red-900">Our Royal Selection</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="burger in featuredBurgers" :key="burger.name" class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <img :src="burger.image" :alt="burger.name" class="w-full h-64 object-cover" />
            <div class="p-6 text-center">
              <h3 class="text-2xl font-bold mb-2 font-serif text-red-900">{{ burger.name }}</h3>
              <p class="text-gray-600 mb-4">{{ burger.description }}</p>
              <p class="text-sm italic text-gray-500 mb-4">{{ burger.usp }}</p>
              <span class="text-2xl font-bold text-red-600 mb-4 block">R{{ burger.price.toFixed(2) }}</span>
              <button class="bg-yellow-500 text-red-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition duration-300 shadow-md">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-24 bg-red-900 text-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-12 md:mb-0">
            <img src="/assets/about.jpg" alt="About Royal Burger" class="rounded-lg shadow-2xl w-full h-96 object-cover" />
          </div>
          <div class="md:w-1/2 md:pl-12">
            <h2 class="text-5xl font-bold mb-8 font-serif">Our Royal Story</h2>
            <p class="text-lg mb-6 leading-relaxed">Royal Burger has been serving gourmet burgers made with the finest ingredients since 2010. Our passion for quality and flavor has made us a local favorite and a destination for burger enthusiasts.</p>
            <p class="text-xl italic mb-8 text-yellow-400">Our mission: To provide delicious, sustainable meals that bring joy to our community.</p>
            <RouterLink to="/about" class="inline-block bg-yellow-500 text-red-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 transition duration-300 shadow-lg">Discover Our Journey</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-bold text-center mb-16 font-serif text-red-900">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white p-8 rounded-lg shadow-xl">
            <div class="flex items-center mb-4">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="w-16 h-16 rounded-full mr-4 border-2 border-yellow-500" />
              <div>
                <h3 class="font-bold text-xl text-red-900">{{ testimonial.name }}</h3>
                <div class="text-yellow-500">
                  <i v-for="n in 5" :key="n" class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">"{{ testimonial.comment }}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Promotions Section -->
    <section id="promotions" class="py-24 bg-gradient-to-b from-red-900 to-black text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-5xl font-bold mb-8 font-serif">Royal Offers</h2>
        <p class="text-2xl mb-10">Get a complimentary artisanal beverage with every gourmet burger purchase!</p>
        <RouterLink to="/menu" class="bg-yellow-500 text-red-900 px-10 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 transition duration-300 shadow-lg transform hover:scale-105">Claim Your Royal Treat</RouterLink>
      </div>
    </section>
  </div>
</template>


<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'LandingPage',
  setup() {
    const scrolled = ref(false)
    const mobileMenuOpen = ref(false)

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50
    }

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const navLinks = [
      { href: '#', text: 'Home' },
      { href: '#featured', text: 'Menu' },
      { href: '#about', text: 'About' },
      { href: '#testimonials', text: 'Testimonials' },
      { href: '#promotions', text: 'Offers' },
    ]

    const featuredBurgers = [
      {
        name: 'The Royal Deluxe',
        description: 'Angus beef patty, truffle aioli, aged cheddar, and caramelized onions',
        price: 119.99,
        usp: 'Our signature burger with a luxurious twist',
        image: '/assets/hamburger.jpg'
      },
      {
        name: 'Crowned Chicken',
        description: 'Grilled chicken breast, avocado, bacon, and honey mustard sauce',
        price: 129.99,
        usp: 'A regal blend of flavors for poultry lovers',
        image: '/assets/chicken.jpg'
      },
      {
        name: 'Vegetarian Monarch',
        description: 'Plant-based patty, roasted vegetables, vegan cheese, and basil pesto',
        price: 89.99,
        usp: 'A royal feast for herbivores and carnivores alike',
        image: '/assets/vegan.jpg'
      }
    ]

    const testimonials = [
      {
        name: 'John D.',
        avatar: 'https://picsum.photos/seed/john/64/64',
        comment: 'The Royal Deluxe is a true masterpiece. Every bite is a journey through flavor country!'
      },
      {
        name: 'Sarah M.',
        avatar: 'https://picsum.photos/seed/sarah/64/64',
        comment: 'As a vegetarian, I am blown away by the Vegetarian Monarch. It is a game-changer!'
      },
      {
        name: 'Mike R.',
        avatar: 'https://picsum.photos/seed/mike/64/64',
        comment: 'The ambiance, the service, the food - Royal Burger is in a league of its own. A must-visit!'
      }
    ]

    return {
      scrolled,
      mobileMenuOpen,
      toggleMobileMenu,
      navLinks,
      featuredBurgers,
      testimonials
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@300;400;700&display=swap');

/* Font settings */
.font-serif {
  font-family: 'Playfair Display', serif;
}

.font-sans {
  font-family: 'Raleway', sans-serif;
}
</style>


<template>
  <div class="font-roboto " style="background-image: url('/assets/background.jpg'); background-size: cover; background-position: center; background-attachment: fixed;">

    <!-- Menu Header -->
    <header class="bg-gradient-to-b from-red-900 to-black text-white py-16 text-center relative overflow-hidden">
      <div class="absolute inset-0 "></div>
      <div class="relative z-10">
        <h1 class="text-6xl font-extrabold mb-4 text-white shadow-text">Our Royal Menu</h1>
        <p class="text-2xl italic">Delicious creations fit for royalty</p>
      </div>
    </header>

    <!-- Menu Categories -->
    <section class="container mx-auto px-4 py-16">
      <div class="flex justify-center flex-wrap gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="['px-6 py-3 rounded-full font-bold transition duration-300 transform hover:scale-105',
                   selectedCategory === category ? 'bg-yellow-400 text-red-900 shadow-lg' : 'bg-red-900 text-white hover:bg-red-800']"
        >
          {{ category }}
        </button>
      </div>

      <!-- Menu Items -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="item in filteredMenuItems"
          :key="item.id"
          class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img :src="item.image" :alt="item.name" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-red-800">{{ item.name }}</h3>
            <p class="text-gray-600 mb-4">{{ item.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-yellow-500">R{{ item.price.toFixed(2) }}</span>
              <button class="bg-red-900 text-white px-6 py-2 rounded-full font-bold hover:bg-red-800 transition duration-300 transform hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customization Options -->
    <section class="container mx-auto px-4 py-16 bg-gray-900 bg-opacity-80 rounded-lg shadow-2xl my-16">
      <h2 class="text-5xl text-yellow-400 font-bold text-center mb-12 shadow-text">Customize Your Burger</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(options, category) in customizationOptions" :key="category" class="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
          <h3 class="text-2xl font-bold mb-4 text-red-800">{{ category }}</h3>
          <ul class="space-y-3">
            <li v-for="option in options" :key="option.name" class="flex justify-between items-center border-b border-gray-200 pb-2">
              <span class="text-gray-800">{{ option.name }}</span>
              <span class="text-yellow-500 font-bold">R{{ option.price.toFixed(2) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Special Dietary Requirements -->
    <section class="bg-gradient-to-b from-red-900 to-black text-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-white shadow-text">Special Dietary Requirements</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center bg-white bg-opacity-10 p-8 rounded-lg transform transition duration-300 hover:scale-105">
            <i class="fas fa-leaf text-5xl mb-6 text-yellow-300"></i>
            <h3 class="text-2xl font-bold mb-4">Vegetarian Options</h3>
            <p class="text-lg">We offer a variety of delicious vegetarian burgers and sides.</p>
          </div>
          <div class="text-center bg-white bg-opacity-10 p-8 rounded-lg transform transition duration-300 hover:scale-105">
            <i class="fas fa-wheat-awn-circle-exclamation text-5xl mb-6 text-yellow-300"></i>
            <h3 class="text-2xl font-bold mb-4">Gluten-Free Buns</h3>
            <p class="text-lg">Gluten-free bun options available for all our burgers.</p>
          </div>
          <div class="text-center bg-white bg-opacity-10 p-8 rounded-lg transform transition duration-300 hover:scale-105">
            <i class="fas fa-carrot text-5xl mb-6 text-yellow-300"></i>
            <h3 class="text-2xl font-bold mb-4">Vegan Choices</h3>
            <p class="text-lg">Try our plant-based burgers and vegan-friendly sides.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>



<script>
export default {
  name: 'MenuPage',
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Burgers', 'Sides', 'Drinks', 'Desserts'],
            menuItems: [
        {
          id: 1,
          name: 'The Royal Deluxe',
          description: 'Angus beef patty, truffle aioli, aged cheddar, and caramelized onions',
          price: 269.82, // 14.99 USD to ZAR
          image: '/assets/burger.jpg',
          category: 'Burgers'
        },
        {
          id: 2,
          name: 'Crowned Chicken',
          description: 'Grilled chicken breast, avocado, bacon, and honey mustard sauce',
          price: 233.82, // 12.99 USD to ZAR
          image: '/assets/chicken.jpg',
          category: 'Burgers'
        },
        {
          id: 3,
          name: 'Vegetarian Monarch',
          description: 'Plant-based patty, roasted vegetables, vegan cheese, and basil pesto',
          price: 251.82, // 13.99 USD to ZAR
          image: '/assets/vegan.jpg',
          category: 'Burgers'
        },
        {
          id: 4,
          name: 'Royal Fries',
          description: 'Hand-cut fries seasoned with our special royal spice blend',
          price: 89.82, // 4.99 USD to ZAR
          image: '/assets/fries.jpg',
          category: 'Sides'
        },
        {
          id: 5,
          name: 'Crown Cola',
          description: 'Our signature cola blend, perfect with any burger',
          price: 53.82, // 2.99 USD to ZAR
          image: '/assets/cola.jpg',
          category: 'Drinks'
        },
        {
          id: 6,
          name: 'Regal Chocolate Sundae',
          description: 'Rich chocolate ice cream topped with brownie bits and royal cherry',
          price: 125.82, // 6.99 USD to ZAR
          image: '/assets/sunday.jpg',
          category: 'Desserts'
        }
      ],
      customizationOptions: {
        'Patties': [
          { name: 'Extra Beef Patty', price: 29.99 }, // 3.99 USD to ZAR
          { name: 'Chicken Patty', price: 29.99 }, // 2.99 USD to ZAR
          { name: 'Veggie Patty', price: 39.99 } // 2.99 USD to ZAR
        ],
        'Toppings': [
          { name: 'Extra Cheese', price: 15.00 }, // 1.50 USD to ZAR
          { name: 'Bacon', price: 30.00 }, // 2.00 USD to ZAR
          { name: 'Fried Egg', price: 20.00 }, // 1.50 USD to ZAR
          { name: 'Avocado', price: 35.00 } // 2.00 USD to ZAR
        ],
        'Sauces': [
          { name: 'Truffle Aioli', price: 13.50 }, // 0.75 USD to ZAR
          { name: 'Spicy Royal Sauce', price: 13.50 }, // 0.75 USD to ZAR
          { name: 'Garlic Mayo', price: 13.50 } // 0.75 USD to ZAR
        ],
        'Extras': [
          { name: 'Gluten-Free Bun', price: 27.00 }, // 1.50 USD to ZAR
          { name: 'Lettuce Wrap', price: 0.00 }, // Free
          { name: 'Extra Pickles', price: 9.00 } // 0.50 USD to ZAR
        ]
      }
    }
  },
  computed: {
    filteredMenuItems() {
      return this.selectedCategory === 'All'
        ? this.menuItems
        : this.menuItems.filter(item => item.category === this.selectedCategory);
    }
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>


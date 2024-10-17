<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0 bg-orange-600 md:w-56 flex flex-col justify-between">
          <div class="p-6">
            <div class="text-white font-bold text-3xl mb-2">Burger Palace</div>
            <p class="text-orange-200 text-sm">Savor the flavor, one bite at a time!</p>
          </div>
          <img class="h-48 w-full object-cover md:h-full md:w-56" src="/assets/burger.jpg" alt="Juicy burger">
        </div>
        <div class="p-8 w-full">
          <h1 class="text-3xl font-extrabold text-gray-900 mb-6">Place Your Order</h1>

          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800">Menu</h2>
            <ul class="space-y-4">
              <li v-for="(item, index) in menuItems" :key="index" class="flex justify-between items-center">
                <div>
                  <span class="font-medium text-gray-900">{{ item.name }}</span>
                  <p class="text-sm text-gray-500">{{ item.description }}</p>
                </div>
                <div class="flex items-center">
                  <span class="text-lg font-semibold text-gray-900 mr-4">R{{ item.price.toFixed(2) }}</span>
                  <button @click="addToOrder(item)" class="bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out">
                    Add
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800">Your Order</h2>
            <ul v-if="order.length > 0" class="space-y-2">
              <li v-for="(item, index) in order" :key="index" class="flex justify-between items-center text-gray-700">
                <span>{{ item.name }} x{{ item.quantity }}</span>
                <span class="font-medium">R{{ (item.price * item.quantity).toFixed(2) }}</span>
              </li>
            </ul>
            <p v-else class="text-gray-500 italic">Your order is empty</p>
            <div class="mt-4 text-xl font-bold text-gray-900">
              Total: R{{ orderTotal.toFixed(2) }}
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <button @click="submitOrder" class="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 ease-in-out">
              Place Order
            </button>
            <button @click="integrateWithMrDFood" class="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">
              Order with Mr D Food
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Classic Burger', price: 55.00, description: 'Juicy beef patty with fresh lettuce and tomato' },
        { name: 'Cheeseburger Deluxe', price: 65.00, description: 'Our classic topped with melted cheddar' },
        { name: 'Veggie Supreme', price: 60.00, description: 'Plant-based patty with avocado and sprouts' },
        { name: 'Crispy Fries', price: 25.00, description: 'Golden and crispy, seasoned to perfection' },
        { name: 'Refreshing Drink', price: 20.00, description: 'Choose from our selection of sodas or iced tea' },
      ],
      order: [],
    }
  },
  computed: {
    orderTotal() {
      return this.order.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  methods: {
    addToOrder(item) {
      const existingItem = this.order.find(orderItem => orderItem.name === item.name)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.order.push({ ...item, quantity: 1 })
      }
    },
    submitOrder() {
      // Here you would typically send the order to your backend
      alert(`Thank you for your order! Total: R${this.orderTotal.toFixed(2)}`)
      this.order = []
    },
    integrateWithMrDFood() {
      // This is where you'd integrate with Mr D Food's API
      alert('Connecting to Mr D Food... (This is a placeholder for the actual integration)')
    }
  }
}
</script>

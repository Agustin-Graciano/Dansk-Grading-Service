<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="text-blue font-bold hover:text-black"
    >
      Grading services
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed top-0 right-0 bottom-0-0 left-0 h-full w-full bg-white opacity-0 cursor-auto"
    ></button>
    <div v-if="isOpen" class="absolute bg-white w-36 shadow-sm">
      <router-link
        to="/PSA"
        class="block px-4 py-2 hover:bg-white font-bold hover:text-blue"
        >PSA</router-link
      >
      <router-link
        to="/BGS"
        class="block px-4 py-2 hover:bg-white font-bold hover:text-blue"
        >BGS (Beckett)</router-link
      >
      <router-link
        to="/CGC"
        class="drop block px-4 py-2 hover:bg-white font-bold hover:text-blue"
        >CGC</router-link
      >
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
      }
    },
  }
</script>

<style scoped>
  .drop {
    z-index: 2000 !important;
  }
</style>

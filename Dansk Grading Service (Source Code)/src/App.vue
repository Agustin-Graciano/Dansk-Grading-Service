<template>
  <!-- <suspense> -->
  <HeaderVue />
  <RouterView />
  <!-- </suspense> -->
</template>

<script>
  import HeaderVue from './Components/Header.vue'
  export default {
    components: {
      HeaderVue,
    },
  }
</script>

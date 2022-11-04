<template>
  <div class="bg-white px-4 py-2">
    <div class="flex justify-center">
      <div class="right-border mt-20 mb-20">
        <a><DropDownMenu class="inline-block px-4 mt-2 mb-2" /></a>
        <router-link
          to="/PSAKort"
          class="inline-block px-4 mt-2 mb-2 text-blue font-bold hover:text-black"
          >PSA Kort
        </router-link>
        <router-link
          to="/Opbevaring"
          class="inline-block px-4 mt-2 mb-2 text-blue font-bold hover:text-black"
          >Opbevaring</router-link
        >
        <router-link
          to="/priser"
          class="inline-block px-4 mt-2 mb-2 text-blue font-bold hover:text-black"
          >Priser</router-link
        >
      </div>
      <div>
        <router-link to="/"
          ><img
            src="https://cdn.shopify.com/s/files/1/0558/2749/7135/files/160951771_137318954966106_5380319641252698276_n_360x.png?v=1616866138"
            width="150"
            class="rounded-full"
            alt="logo"
        /></router-link>
      </div>
      <div class="left-border mt-20 mb-20">
        <router-link
          to="/vurdering"
          class="inline-block px-4 mt-2 mb-2 text-blue font-bold hover:text-black"
          >Få en gratis levering</router-link
        >
        <router-link
          to="/FAQ"
          class="inline-block px-4 mt-2 mb-2 text-blue font-bold hover:text-black"
          >FAQ</router-link
        >
        <router-link
          to="/Kontakt"
          class="inline-block px-4 mt-2 mb-2 text-blue font-bold hover:text-black"
          >kontakt</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
  import DropDownMenu from './DropDownMenu.vue'

  export default {
    components: {
      DropDownMenu,
    },
  }
</script>

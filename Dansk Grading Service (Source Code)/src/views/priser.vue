<template>
  <top-bar />

  <div>
    <div class="flex justify-center">
      <div class="w-3/4">
        <h1 class="pi text-white text-xl font-bold mb-4 text-center border">
          PSA Grading Priser
        </h1>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="3/4">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0558/2749/7135/files/psa_480x480.png?v=1654704414"
            class="pe mb-10"
          />
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="flex justify-center">
      <div class="w-3/4">
        <h1
          class="pi text-white text-xl font-bold mb-4 text-center mt-10 border"
        >
          CGC Grading Priser
        </h1>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="3/4">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0558/2749/7135/files/cgc_480x480.png?v=1654704424"
            class="pe mb-10"
          />
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="flex justify-center">
      <div class="w-3/4">
        <h1
          class="pi text-white text-xl font-bold mb-4 text-center mt-4 border"
        >
          BGS Grading Priser
        </h1>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="3/4">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0558/2749/7135/files/bgs_480x480.png?v=1654704432"
            class="pe mb-10"
          />
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="flex justify-center">
      <div class="w-3/4">
        <h1
          class="pi text-white text-xl font-bold mb-4 text-center mt-4 border"
        >
          Ekstra Services
        </h1>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="3/4">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0558/2749/7135/files/ekstra_480x480.png?v=1654704597"
            class="pe mb-16"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-blue text-white text-sm font-semilight text-center py-2">
    <div class="my-1 font-semibold text-sm">Følg os:</div>
    <div class="flex flex:row justify-center">
      <div>
        <router-link
          to
          href="https://www.facebook.com/DanskGradingService"
          target="_blank"
          class="mt-3 p-2"
        >
          <button><img src="/facebook.png" class="hover:opacity-80" /></button>
        </router-link>
      </div>
      <div>
        <router-link
          to
          href="https://www.instagram.com/danskgradingservice/"
          target="_blank"
          class="mt-3 p-2"
        >
          <button><img src="/instagram.png" class="hover:opacity-80" /></button>
        </router-link>
      </div>
    </div>
    <div class="my-2">
      2022 Dansk Grading Service | Eriksvej 8, 9000 Aalborg | Tlf. 51887404 |
      CVR 38152041 |
      <button href="#" class="hover:text-white font-semilight hover:underline">
        mail@grading.dk
      </button>
    </div>
  </div>
</template>

<script>
  import TopBar from '../Components/TopBar.vue'
  import CartIcon from 'vue-material-design-icons/Cart.vue'
  import 'vue-material-design-icons/styles.css'

  export default {
    components: {
      CartIcon,
      TopBar,
    },
  }
</script>

<style scoped>
  .right-border {
    border-color: #133f8d;
    border-style: solid;
    border-top-width: 2px;
    border-bottom-width: 2px;
  }
  .left-border {
    border-color: #133f8d;
    border-style: solid;
    border-top-width: 2px;
    border-bottom-width: 2px;
  }
  .border {
    border-color: #133f8d;
    border-style: solid;
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 250px;
    margin: auto;
    background-color: #133f8d;
  }
  .pi {
    font-size: 130%;
  }

  .pe {
    padding: 10px 10px 10px 10px;
  }
</style>

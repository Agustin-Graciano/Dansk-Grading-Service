<template>
  <top-bar />

  <div class="flex justify-center">
    <div class="w-3/4">
      <div class="flex flex:row gap-10 mb-16">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:none gap-5"
        >
          <a href="#">
            <div class="w-2/8 h-2/5">
              <img
                src="https://cdn.shopify.com/s/files/1/0558/2749/7135/products/psa_value_1f903352-b2cd-472e-92c9-df4771b21ced_360x.png?v=1619862017"
                class="su hover:opacity-90 rounded-tl-lg rounded-tr-lg w-3/4 h-3/8 ml-10"
              />
              <div class="p-2 text-center bg-light-grey">
                <span class="font-semibold text-sm text-black"
                  >PSA Bulk Special<br />[PSA]</span
                >
                <span class="font-semibold text-sm text-blue"
                  ><br />
                  fra 195,00 kr</span
                >
              </div>
              <div
                class="bg-blue text-center text-white font-semibold rounded p-1 hover:opacity-90"
              >
                Tilføj til kurv
              </div>
            </div>
          </a>

          <a href="#">
            <div class="w-2/8 h-2/5">
              <img
                src="https://cdn.shopify.com/s/files/1/0558/2749/7135/products/psa_regular_360x.png?v=1619862306"
                class="su hover:opacity-90 rounded-tl-lg rounded-tr-lg w-3/4 h-3/8 ml-10"
              />
              <div class="p-2 text-center bg-light-grey">
                <span class="font-semibold text-sm text-black"
                  >PSA Regular Grading<br />[PSA]</span
                >
                <span class="font-semibold text-sm text-blue"
                  ><br />
                  fra 875,00 kr</span
                >
              </div>
              <div
                class="bg-blue text-center text-white font-semibold rounded p-1 hover:opacity-90"
              >
                Tilføj til kurv
              </div>
            </div>
          </a>

          <a href="#">
            <div class="w-2/8 h-2/5">
              <img
                src="https://cdn.shopify.com/s/files/1/0558/2749/7135/products/psa_express_360x.png?v=1619862219"
                class="hover:opacity-90 rounded-tl-lg center rounded-tr-lg w-3/4 h-3/8 ml-10"
              />
              <div class="p-2 text-center bg-light-grey">
                <span class="font-semibold text-sm text-black"
                  >PSA Express Grading<br />[PSA]</span
                >
                <span class="font-semibold text-sm text-blue"
                  ><br />
                  fra 1350,00 kr</span
                >
              </div>
              <div
                class="bg-blue text-center text-white font-semibold rounded p-1 hover:opacity-90"
              >
                Tilføj til kurv
              </div>
            </div>
          </a>
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
  .pi {
    font-size: 150%;
  }
</style>

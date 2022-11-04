<template>
  <top-bar />

  <div class="flex justify-center m-2">
    <div class="w-3/4">
      <h1 class="pi text-black text-xl font-bold mb-10">PSA Kort</h1>
      <div
        class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <div v-for="card in cards" :key="card.id" class="shadow-lg rounded-lg">
          <a href="#">
            <img
              :src="card.image"
              class="hover:opacity-90 rounded-tl-lg rounded-tr-lg"
            />
            <div class="p-2 text-center bg-light-grey">
              <span class="font-semibold text-sm text-black"
                >{{ card.name }}<br />[{{ card.type }}]</span
              >
              <span class="font-semibold text-sm text-blue"
                ><br />
                {{ card.price }} kr</span
              >
            </div>
          </a>
          <a href="#">
            <div
              class="text-base font-semibold p-1 bg-blue text-white text-center hover:opacity-90 rounded"
            >
              Tilføj til kurv
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '../Components/TopBar.vue'
  import CartIcon from 'vue-material-design-icons/Cart.vue'
  import 'vue-material-design-icons/styles.css'
  import { getPSACards } from '../firebase'

  export default {
    components: {
      CartIcon,
      TopBar,
    },
    data() {
      return {
        cards: [],
      }
    },
    mounted() {
      getPSACards().then((cards) => {
        this.cards = cards
      })
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

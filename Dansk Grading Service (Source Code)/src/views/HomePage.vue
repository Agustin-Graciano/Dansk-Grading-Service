<template>
  <top-bar />

  <div class="flex justify-center">
    <img
      src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/11/most-expensive-pokemon-cards.jpg"
      class="imgPoke object-contain h-3/4 w-3/4"
    />
    <div
      class="pi absolute w-full py-15 my-15 leading-10 bottom-20 inset-x-0 text-white text-xl font-bold text-center drop-shadow-lg"
    >
      Lad os hjælpe dig med at få graded dine kort <br />
      vi hjælper med alle typer kort igennem de største grading services.
    </div>
    <a
      href="/FAQ"
      class="absolute bottom-3 py-2 px-10 font-bold text-white bg-blue hover:bg-eg-blue rounded-full drop-shadow-lg"
      >Mere information og priser</a
    >
  </div>

  <div class="flex justify-center">
    <div class="bg-white py-5 w-3/4">
      <p class="pi mt-10 text-left text-lg text-blue font-bold">
        Grading services igennem PSA, BGS og CGC
      </p>
      <p class="mt-5 text-left text-lg text-black font-semilight">
        Vi tilbyder at hjælpe dig med at få graded dine samlekort, hos de 3 mest
        anerkendte grading firmaer i verden; PSA, BGS og CGC.<br />
        Priser og information finder du ved at klikke på menuerne i toppen af
        siden, og direkte herunder kan du købe grading services fra de
        forskellige firmaer.
      </p>
      <p class="mt-2 text-left text-lg text-black font-semilight">
        Hvis du har spørgsmål er du altid velkommen til at kontakte os via mail
        eller telefon.
      </p>
    </div>
  </div>

  <div class="flex flex-row justify-center pt-5">
    <button>
      <a href="/PSA">
        <img
          src="https://cdn.shopify.com/s/files/1/0558/2749/7135/collections/231-2310791_psa-grading-standards-professional-sports-authenticator_1200x1200.png?v=1617478082"
          class="object-contain h-24 w-96 my-16 hover:opacity-80"
        />
        <div class="text-blue font-bold text-lg">PSA Grading</div>
      </a>
    </button>
    <button>
      <a href="/BGS">
        <img
          src="https://cdn.shopify.com/s/files/1/0558/2749/7135/collections/BGS-Logo_540x.jpg?v=1617478104"
          class="object-contain h-56 w-96 -my-0 hover:opacity-80"
        />
        <div class="text-blue font-bold text-lg">Beckett Grading</div>
      </a>
    </button>
    <button>
      <a href="/CGC">
        <img
          src="https://cdn.shopify.com/s/files/1/0558/2749/7135/collections/trading-cards-logo_540x.png?v=1618943891"
          class="object-contain h-56 w-96 my-0 hover:opacity-80"
        />
        <div class="text-blue font-bold text-lg">CGC Grading</div>
      </a>
    </button>
  </div>

  <div class="flex justify-center py-20 px-28">
    <div class="w-2/4">
      <div class="bg-light-grey h-48 py-10 px-10">
        <h1 class="text-blue font-bold pi text-left">
          Tilmeld dig vores nyhedsbrev
        </h1>
        <p class="text-left text-lg font-semilight pt-2">
          Nyheder, information om grading, deadlines og general information
          omkring hobbyen!
        </p>
      </div>
    </div>
    <div class="w-2/5">
      <div class="bg-dark-grey h-48 py-10 px-10">
        <input
          class="placeholder: placeholder:text-slate-400 block bg-white w-96 border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-blue focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Din E-Mail"
          type="text"
          name="search"
        />
        <div class="mt-4 ml-1">
          <button
            class="btn btn-blue bg-blue hover:bg-eg-blue py-2 px-2 text-white font-bold"
          >
            Abonnér
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="w-3/4">
      <div class="border border-blue mb-16"></div>
      <img
        src="https://cdn-cardmavin.mavin.io/wp-content/uploads/2018/11/pokemon-eCard-skyridge-set-1024x171.jpg"
        class="w-4/3 h-6/6 border-2 border-blue mb-10"
      />
      <h1 class="text-blue text-xl font-bold p-1 py-0 mt-5">
        Seneste Nyheder:
        <span class="text-lg text-black">DGS's favoritter</span>
        <button
          href="#"
          class="hover:text-blue text-black text-lg font-bold hover:underline"
        >
          Skyridge Holos
        </button>
      </h1>
      <div class="flex flex-row justify-center">
        <div class="w-2/3 h-2/3">
          <img
            src="https://cdn.shopify.com/s/files/1/0558/2749/7135/articles/nr._1_Umbreon_360x.jpg?v=1632144517"
            class="mt-5 mb-10 mr-2"
          />
        </div>
        <div class="w-2/3 h-2/3">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/6672/9526/products/47260e22-8b3d-4f5f-86f7-751b4369934d_9be5d6b3-cc15-458e-8e69-e83b4893c1f3_800x.jpg?v=1636997146"
            class="mt-5 mb-10 ml-2"
          />
        </div>
        <div class="w-2/3 h-2/3">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/6672/9526/products/eb3ae4d6-7fe2-430a-b31d-8760fb782541_52650480-7d90-4149-a4db-aeacf7b677da_800x.jpg?v=1636996575"
            class="mt-5 mb-10 ml-4"
          />
        </div>
        <div class="w-2/3 h-2/3">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/6672/9526/products/817326ce-34d2-4c78-a720-8bad1fb44fc8_264bf6ea-08bc-4a7c-9e16-36ee8b666bef_800x.jpg?v=1636996581"
            class="mt-5 mb-10 ml-6"
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
  import { useStore } from 'vuex'

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

  .center-border {
    border-color: #133f8d;
    border-style: solid;
    border-top-width: 2px;
    border-bottom-width: 2px;
  }

  .imgPoke {
    -webkit-filter: brightness(50%);
    filter: brightness(50%);
    border-width: 2px;
    border-color: #133f8d;
    z-index: -1 !important;
  }
  .pi {
    font-size: 180%;
  }
</style>

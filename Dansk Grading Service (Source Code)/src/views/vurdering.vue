<template>
  <top-bar />

  <div>
    <div class="flex justify-center">
      <div class="w-3/4">
        <h1 class="pi text-black text-xl font-bold mb-10">
          Få en gratis vurdering
        </h1>

        <p class="text-lg text-black font-semilight mb-20">
          Har du netop fundet din gamle barndomssamling frem fra gemmerne og er
          i tvivl om hvad den er værd, om der er kort du bør grade og hvordan du
          bedst kan afsætte dem til den højeste pris? <br />
          <br />
          I så fald stiller vi meget gerne vores ekspertise til rådighed.<br />
          <br />
          Vi er eksperter i Pokemon kort, følger udviklingen på markedet meget
          nøje, og har et indgående kendskab til gradingselskabernes kriterier,
          hvilket tilsammen gør at vi kan tilbyde en meget kvalificeret
          vurdering af dine kort.<br />
          <br />
          Vi tilbyder at lave denne vurdering gratis, så alt det du behøver er
          at sende billeder af dine kort eller lave en aftale med os om at
          mødes.<br />
          <br />
          Interesseret? Skriv til mail@grading.dk eller benyt vores
          kontaktformular.<br />
        </p>
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
    font-size: 180%;
  }
</style>

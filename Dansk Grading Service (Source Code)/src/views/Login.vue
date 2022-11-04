<template>
  <top-bar />

  <div class="flex justify-center">
    <div class="w-2/5">
      <h1 class="pi text-black text-xl font-bold mb-5">Log Ind</h1>

      <label class="block mt-10">
        <span
          class="asterisk-text after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
        >
          E-mail
        </span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="E-mail"
          v-model="email"
        />
      </label>

      <label class="block mt-5">
        <span
          class="asterisk-text after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
        >
          Adgangskode
        </span>
        <input
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          placeholder="Adgangskode"
          type="password"
          v-model="password"
        />
      </label>

      <div class="mt-2">
        <button>
          <a
            href="/ForgetPass"
            class="text-blue hover:text-eg-blue font-semilight hover:blue"
            >Har du glemte din adgangskode?</a
          >
        </button>
      </div>

      <button
        class="mt-4 mb-4 py-2 px-4 font-bold text-white bg-blue hover:bg-eg-blue rounded-full drop-shadow-lg"
        @click="Login"
      >
        Log Ind
      </button>
    </div>
  </div>

  <div class="mt-20 bg-blue text-white text-sm font-semilight text-center py-2">
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
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

  export default {
    components: {
      CartIcon,
      TopBar,
    },
    setup() {
      const email = ref('')
      const password = ref('')
      const error = ref(null)

      const store = useStore()
      const router = useRouter()

      const Login = async () => {
        try {
          await store.dispatch('logIn', {
            email: email.value,
            password: password.value,
          })
          router.push('/')
        } catch (err) {}
      }
      return { Login, email, password, error }
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

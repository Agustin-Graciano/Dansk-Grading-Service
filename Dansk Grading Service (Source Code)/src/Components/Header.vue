<template>
  <div class="flex">
    <div class="flex-none">
      <div class="bg-blue text-white px-4 py-2 text-sm">
        Kort sendes til<b> PSA </b>hver 2. uge. Deadline for næste<b> BGS </b>
        og <b> CGC </b><br />Sending: 29. juli 2022
      </div>
    </div>
    <div class="flex-1 w-64">
      <div class="bg-blue text-white px-4 py-7 text-sm"></div>
    </div>

    <div class="flex-none">
      <div
        class="bg-blue text-white px-4 py-2.5 text-sm h-full flex items-center justify-center"
        v-if="user.data"
      >
        <div class="relative">
          <button
            @click="handleOpen"
            class="inline-block px-4 py-0 text-sm font-bold"
          >
            {{ user.data.displayName }}
          </button>
          <button
            v-if="isOpen"
            @click="isOpen = false"
            class="fixed top-0 right-0 bottom-0-0 left-0 h-full w-full bg-white opacity-0 cursor-auto"
          ></button>
          <div v-if="isOpen" class="absolute bg-white w-36 shadow-sm">
            <button
              @click="handleSignOut"
              class="block px-4 py-2 font-bold text-blue"
            >
              Sign out
            </button>
          </div>
        </div>
        <cart-icon class="mdi mdiCart" />
        <router-link
          to="/Shopingcart"
          class="inline-block px-4 py-0 text-sm font-bold"
          >Indkøbskurv</router-link
        >
      </div>
      <div class="bg-blue text-white px-4 py-2.5 text-sm" v-else>
        <router-link
          to="/Login"
          class="inline-block px-4 py-0 text-sm font-bold"
          >Log ind</router-link
        >
        <h1 class="inline-block px-0 py-2 text-sm">eller</h1>
        <router-link
          to="/Opkonto"
          class="inline-block px-4 py-0 text-sm font-bold"
          >Opret konto</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  import { auth } from '../firebaseConfig'
  import { useRouter } from 'vue-router'
  export default {
    data() {
      return {
        isOpen: false,
      }
    },
    setup() {
      const store = useStore()
      const router = useRouter()

      auth.onAuthStateChanged((user) => {
        store.dispatch('fetchUser', user)
      })

      const user = computed(() => {
        console.log('computed')
        return store.getters.user
      })

      const signOut = async () => {
        await store.dispatch('logOut')
        router.push('/')
      }

      return {
        user,
        signOut,
      }
    },
    methods: {
      handleOpen() {
        this.isOpen = true
      },
      handleSignOut() {
        this.isOpen = false
        this.signOut()
      },
    },
  }
</script>

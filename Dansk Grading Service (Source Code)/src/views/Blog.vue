<template>
  <top-bar />

  <QuillEditor toolbar="full" theme="snow" />
</template>

<script>
  /* import { db } from '../firebase.js'
import { ref } from 'vue'

import { collection, getDocs, doc, deleteDoc} from "firebase/firestore";

const posts = ref([]) 

//Make Delete again
const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    posts.value.push({ 
    ...doc.data(), 
    id: doc.id 
  })

  //debugger
  console.log(doc.id, " => ", doc.data());
}); */

  import { QuillEditor } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css'
  import TopBar from '../Components/TopBar.vue'
  import CartIcon from 'vue-material-design-icons/Cart.vue'
  import 'vue-material-design-icons/styles.css'

  export default {
    components: {
      CartIcon,
      QuillEditor,
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

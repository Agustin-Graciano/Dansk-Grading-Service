/* import{ref} from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"


const userUsers = () => {
    const auth = getAuth('')
    const email = ref('')
    const password = ref ('')
    const user = ref(null)

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
} */
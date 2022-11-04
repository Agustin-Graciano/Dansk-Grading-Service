// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBJxjkWbVBQdfdBezIgQXZLBg6drDkKLu8',
  authDomain: 'vuevite-51379.firebaseapp.com',
  projectId: 'vuevite-51379',
  storageBucket: 'vuevite-51379.appspot.com',
  messagingSenderId: '179878507878',
  appId: '1:179878507878:web:78e4cbd23903708fae84a7',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

//initialize firebase auth
const auth = getAuth()

const firestore = getFirestore()

export { app, auth, firestore }

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDm87SCz0KIYE0yxQ3_ixzFv0VhSoCIw74',
  authDomain: 'thedojo-34fa8.firebaseapp.com',
  projectId: 'thedojo-34fa8',
  storageBucket: 'thedojo-34fa8.appspot.com',
  messagingSenderId: '974676563964',
  appId: '1:974676563964:web:5f39e1dbd55fc7509b4479',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore() // firestore
const projectAuth = firebase.auth() // auth
const projectStorage = firebase.storage() // storage

// set timestamp function
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

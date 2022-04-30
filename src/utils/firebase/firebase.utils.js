import { async } from '@firebase/util'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC9r0Svce_bsaH6-RnyL-v3mWPQM-2DO_4',
  authDomain: 'crwn-clothing-db-bf8dc.firebaseapp.com',
  projectId: 'crwn-clothing-db-bf8dc',
  storageBucket: 'crwn-clothing-db-bf8dc.appspot.com',
  messagingSenderId: '978828986179',
  appId: '1:978828986179:web:cb38fbdc7c2b53764fd1f6',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signinWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

const createUserDocumentFromAuth = async userAuth => {}

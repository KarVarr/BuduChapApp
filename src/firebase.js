import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCNe2WEpXW3DujpQL_D_151eVBSsSov1D4',
  authDomain: 'chat-75f20.firebaseapp.com',
  projectId: 'chat-75f20',
  storageBucket: 'chat-75f20.appspot.com',
  messagingSenderId: '214814540477',
  appId: '1:214814540477:web:3c65552d8fd4ad2b982dd4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

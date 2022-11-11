import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFhDTkbCxmD2rzV6xAvygUcEO9lnqF9zw",
  authDomain: "vacation-107d4.firebaseapp.com",
  projectId: "vacation-107d4",
  storageBucket: "vacation-107d4.appspot.com",
  messagingSenderId: "132981686393",
  appId: "1:132981686393:web:12c4e8a404d1318ebcd4a8",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();

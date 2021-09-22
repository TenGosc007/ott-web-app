import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCk9VUnBVTWGH17_3HhHyA8mGpHxEfK7TQ",
  authDomain: "ottplayer-f9a6f.firebaseapp.com",
  projectId: "ottplayer-f9a6f",
  storageBucket: "ottplayer-f9a6f.appspot.com",
  messagingSenderId: "272231227205",
  appId: "1:272231227205:web:867017a31865aeddb6e82c",
  measurementId: "G-RR9HS3SZL3",
});

export const analytics = getAnalytics(firebaseConfig);

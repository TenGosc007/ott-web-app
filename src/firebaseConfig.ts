import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAnx2BfYmNmui6lyv8xgJNptw7DD_KBFSI",
  authDomain: "ottappv2.firebaseapp.com",
  projectId: "ottappv2",
  storageBucket: "ottappv2.appspot.com",
  messagingSenderId: "286920388061",
  appId: "1:286920388061:web:cbe1444d074f87d73fda34",
  measurementId: "G-43JEX2WRNV",
});

export const analytics = getAnalytics(firebaseConfig);

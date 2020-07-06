import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIaakEVCXzBMRzb-uS3mgLUZxRVdpteIw",
  authDomain: "nviarchat.firebaseapp.com",
  databaseURL: "https://nviarchat.firebaseio.com",
  projectId: "nviarchat",
  storageBucket: "nviarchat.appspot.com",
  messagingSenderId: "41584724815",
  appId: "1:41584724815:web:9726d21903467ceac2933a",
  measurementId: "G-NKJQZ2Y5C2"
});
export const db = firebaseApp.firestore();

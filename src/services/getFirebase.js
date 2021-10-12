import firebase from "firebase";
import'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkCKsBs9WdXbWeKhNL-X-pMRr_Dp2mrb4",
  authDomain: "proyecto-de-react---ecommerce.firebaseapp.com",
  projectId: "proyecto-de-react---ecommerce",
  storageBucket: "proyecto-de-react---ecommerce.appspot.com",
  messagingSenderId: "716900144287",
  appId: "1:716900144287:web:7b99f6976a303292593eaa"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
    return firebase.firestore(app);
}
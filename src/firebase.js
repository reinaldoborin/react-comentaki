import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAHoTuDQSFvicEHcl2_mskyUaUTGosuAOo",
  authDomain: "comentaki-app-3d485.firebaseapp.com",
  databaseURL: "https://comentaki-app-3d485.firebaseio.com",
  projectId: "comentaki-app-3d485",
  storageBucket: "",
  messagingSenderId: "712473199054",
  appId: "1:712473199054:web:025fb7fd9125fa7f51ab9f"
};

firebase.initializeApp(firebaseConfig)

export default firebase
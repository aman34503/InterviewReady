// import firebase from "firebase/compat/app"
// import "firebase/compat/auth"

// export default function useFirebase() {
//   const config = {
//     apiKey: "AIzaSyDJnlC0oO_fgAEleI-isdHn29MXDyaxL1Y",
//     authDomain: "interviewready-95f7b.firebaseapp.com",
//     projectId: "interviewready-95f7b",
//     storageBucket: "interviewready-95f7b.appspot.com",
//     messagingSenderId: "590253887992",
//     appId: "1:590253887992:web:d756df491555222910860d",
//   }
//   firebase.initializeApp(config)
//   return firebase
// }


import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export default function useFirebase() {
  const config = {
    apiKey: "AIzaSyA_yYTOs1EtebxkzJGGQi3XXSgcaGez2DI",
    authDomain: "interviewtoast.firebaseapp.com",
    projectId: "interviewtoast",
    storageBucket: "interviewtoast.appspot.com",
    messagingSenderId: "375173186576",
    appId: "1:375173186576:web:f905830e11683f3747b695",
  }
  firebase.initializeApp(config)
  return firebase
}
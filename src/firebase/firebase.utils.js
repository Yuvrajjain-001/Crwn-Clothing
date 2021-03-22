import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config=
    {
        apiKey: "AIzaSyCo-UFkUAV7oxvO-wuodd8kbpGV_ry1CSI",
        authDomain: "crwn-db001.firebaseapp.com",
        projectId: "crwn-db001",
        storageBucket: "crwn-db001.appspot.com",
        messagingSenderId: "890764432374",
        appId: "1:890764432374:web:b49e00a0cb8035d5e66dd7",
        measurementId: "G-3E741HM504"
      };
    export const createUserProfileDocument=async(userAuth,additionalData)=>{
if(!userAuth)return;
const userRef=firestore.doc(`users/${userAuth.uid}`)

const snapShot=await userRef.get();
if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const createAt=new Date();
    try{
await userRef.set({
    displayName,email,createAt,...additionalData

})
}
catch(error){

  
}
}
return userRef;
    }  
    
      firebase.initializeApp(config);
      export const auth =firebase.auth();
      
      export const firestore =firebase.firestore();
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;



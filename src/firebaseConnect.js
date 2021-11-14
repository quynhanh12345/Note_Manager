// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlWj33TJiXKHOWkTEND9WMwdJsNrHUXqU",
    authDomain: "note-manager-553f3.firebaseapp.com",
    databaseURL: "https://note-manager-553f3-default-rtdb.firebaseio.com",
    projectId: "note-manager-553f3",
    storageBucket: "note-manager-553f3.appspot.com",
    messagingSenderId: "446736044355",
    appId: "1:446736044355:web:0a7e7b77501df51824dff6",
    measurementId: "G-ZVZRRBDV2B"
};

initializeApp(firebaseConfig);

const noteData = ref(getDatabase(), 'dataForNote/');
onValue(noteData, (snapshot) => {
    console.log(snapshot.val());
});




export default noteData;
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyD9Y6hVRI6i5KEqGGlNsH8nU4TLCObe_7w",
        authDomain: "nuxtjs-76065.firebaseapp.com",
        databaseURL: "https://nuxtjs-76065.firebaseio.com",
        projectId: "nuxtjs-76065",
        storageBucket: "nuxtjs-76065.appspot.com",
        messagingSenderId: "736698166078",
        appId: "1:736698166078:web:ea2bc74a1ea89a2bf49a6f"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
    
}
const db = firebase.database();
const storage = firebase.storage();
const fireDb = firebase.firestore();

export {fireDb,db,storage}


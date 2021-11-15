import firebase from "firebase/compat";

const firebaseConfig = {
	apiKey: "AIzaSyBsdDHJvMDSvZqZqXg3MWVzA2P0PrIUJ7Y",
	authDomain: "chat-83eb6.firebaseapp.com",
	databaseURL: "https://chat-83eb6-default-rtdb.firebaseio.com",
	projectId: "chat-83eb6",
	storageBucket: "chat-83eb6.appspot.com",
	messagingSenderId: "1091347838914",
	appId: "1:1091347838914:web:f9062f9bb7d566ca49885b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, db, provider};
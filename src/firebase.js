import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCFtFJZsvd8dJXJZkOYA0m_3v0KPlmVxcU",
	authDomain: "linkedin-clone-7fbff.firebaseapp.com",
	projectId: "linkedin-clone-7fbff",
	storageBucket: "linkedin-clone-7fbff.appspot.com",
	messagingSenderId: "276195237296",
	appId: "1:276195237296:web:5cc48542df0b31a8048a75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

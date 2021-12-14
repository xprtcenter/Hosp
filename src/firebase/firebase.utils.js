import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
	apiKey: "AIzaSyCCLLEUyHEZZUThEJqwPTY4pI6D1x70J6o",
	authDomain: "crwn-db-fbee8.firebaseapp.com",
	projectId: "crwn-db-fbee8",
	storageBucket: "crwn-db-fbee8.appspot.com",
	messagingSenderId: "1010796874722",
	appId: "1:1010796874722:web:981ab45d4413393273c7bb",
	measurementId: "G-R76F0D4ST5",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, userType, email } = userAuth;

		const createdAt = new Date();

		var role = ["user"];

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				role,
				userType,
				...additionalData,
			});
		} catch (error) {
			alert("error creting user", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

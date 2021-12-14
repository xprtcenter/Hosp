import { firestore } from "../../firebase/firebase.utils";

const db = firestore
	.collection("smeData")
	.doc("smeUserRegistration")
	.collection("smeUsers");
//let smeData = firestore.doc("smeData");
class SMEDataService {
	getAll() {
		return db;
	}

	create(sData) {
		return db.add(sData);
	}

	update(id, value) {
		return db.doc(id).update(value);
	}

	delete(id) {
		return db.doc(id).delete();
	}
}

export default new SMEDataService();

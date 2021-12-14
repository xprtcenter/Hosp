import { firestore } from "../../firebase/firebase.utils";

const db = firestore.collection("moduleAndPageMaster");

class ModuleDataService {
	getAll() {
		return db;
	}

	create(ModuleData) {
		return db.add(ModuleData);
	}

	update(id, value) {
		return db.doc(id).update(value);
	}

	delete(id) {
		return db.doc(id).delete();
	}
}

export default new ModuleDataService();

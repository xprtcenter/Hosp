import { firestore } from "../../firebase/firebase.utils";

const db = firestore
	.collection("payrollData")
	.doc("payrollEmpRegistration")
	.collection("payrollEmployee");

class PayrollEmpRegService {
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
	getIdData() {}
}

export default new PayrollEmpRegService();

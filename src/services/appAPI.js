import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc ,deleteDoc } from 'firebase/firestore'
import { receiveContacts, saveContact, removeContact,  updateContact} from '../redux/actions'
import { put, takeLatest, all ,takeEvery} from 'redux-saga/effects';

const firebaseConfig = {
    apiKey: "AIzaSyBW4tFsUwWg5oWZ5bBEmZ74M4FiNmqO4C4",
    authDomain: "contactlist-ba0ee.firebaseapp.com",
    databaseURL: "https://contactlist-ba0ee.firebaseio.com",
    projectId: "contactlist-ba0ee",
    storageBucket: "contactlist-ba0ee.appspot.com",
    messagingSenderId: "140766634586",
    appId: "1:140766634586:web:7dc1d91172c78454766e63"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const contacts = collection(db, 'contacts');

function* postContact(data) {
    try {
        const docRef = yield addDoc(contacts, data.contact);
        console.log("Document written with ID: ", docRef.id);
        yield put(saveContact(data.contact,docRef.id))
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function* getContacts() {
    try {
        const contactSnapshot = yield getDocs(contacts);
        let contactList = [];
        contactSnapshot.forEach((childSnapshot) => {
            contactList.push( {
                id: childSnapshot.id,
                name: childSnapshot.get('name'),
                phone: childSnapshot.get('phone'),
                email: childSnapshot.get('email')
            })
        })
        yield put(receiveContacts(contactList))
    } catch(err) {
        yield put(receiveContacts([]))
    }
   
}

function* deleteContact(data) {
    const firebaseRef = doc(db,"contacts",data.contactId)
    try {
        yield deleteDoc(firebaseRef);
        yield put(removeContact(data.contactId))
    } catch (e) {
        console.error("Error remove document: ", e);
    }
}

function* putContact(data) {
    debugger
    const firebaseRef = doc(db,"contacts",data.contact.id)
    const updatedContact = {
        name: data.contact.name,
        phone: data.contact.phone,
        email: data.contact.email
    }
    try {
        yield updateDoc(firebaseRef,updatedContact);
        yield put(updateContact(data.contact))
    } catch (e) {
        console.error("Error remove document: ", e);
    }
}


function* actionWatcher() {
     yield takeLatest('CALL_SAVE_CONTACT', postContact)
     yield takeEvery('CALL_RECEIVE_CONTACTS', getContacts)
     yield takeLatest('CALL_REMOVE_CONTACT', deleteContact)
     yield takeLatest('CALL_UPDATE_CONTACT', putContact)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}

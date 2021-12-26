import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc ,deleteDoc } from 'firebase/firestore'
import { receiveContacts, saveContact, removeContact,  updateContact} from '../redux/actions'

const firebaseConfig = {
    apiKey: "REDACTED_VAL",
    authDomain: "REDACTED_VAL",
    databaseURL: "REDACTED_VAL",
    projectId: "REDACTED_VAL",
    storageBucket: "REDACTED_VAL",
    messagingSenderId: "REDACTED_VAL",
    appId: "REDACTED_VAL"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const contacts = collection(db, 'contacts');

const postContact = (contact) => async (dispatch) => {
    try {
        const docRef = await addDoc(contacts, contact);
        console.log("Document written with ID: ", docRef.id);
        dispatch(saveContact(contact,docRef.id))
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const getContacts =  () =>  async (dispatch) => {
    try {
        const contactSnapshot = await getDocs(contacts);
        let contactList = [];
        contactSnapshot.forEach((childSnapshot) => {
            contactList.push( {
                id: childSnapshot.id,
                name: childSnapshot.get('name'),
                phone: childSnapshot.get('phone'),
                email: childSnapshot.get('email')
            })
        })
        dispatch(receiveContacts(contactList))
    } catch(err) {
        dispatch(receiveContacts([]))
    }
   
}

const deleteContact = (contactId) => async (dispatch) => {
    const firebaseRef = doc(db,"contacts",contactId)
    debugger
    try {
        await deleteDoc(firebaseRef);
        debugger
        dispatch(removeContact(contactId))
    } catch (e) {
        console.error("Error remove document: ", e);
    }
}

const putContact = (contact) => async (dispatch) => {
    const firebaseRef = doc(db,"contacts",contact.id)
    const updatedContact = {
        name: contact.name,
        phone: contact.phone,
        email: contact.email
    }
    try {
        const docRef = await updateDoc(firebaseRef,updatedContact);
        console.log("Document written with ID: ", docRef.id);
        dispatch(updateContact(contact))
    } catch (e) {
        console.error("Error remove document: ", e);
    }
}

 export {postContact, getContacts, deleteContact, putContact}   

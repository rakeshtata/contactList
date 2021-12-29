var AppConstants = require('./actionTypes');

const saveContact = (contact,id) => ({
	type: AppConstants.SAVE_CONTACT,
	contact,
	id
})

const receiveContacts = (contacts) => ({
	type: AppConstants.RECEIVE_CONTACTS,
	contacts: contacts
})

const removeContact = (contactId) => ({
 	type: AppConstants.REMOVE_CONTACT,
	contactId
})

const updateContact = (contact) => ({
	type: AppConstants.UPDATE_CONTACT,
	contact
})

const call_saveContact = (contact,id) => ({
	type: AppConstants.CALL_SAVE_CONTACT,
	contact,
	id
})

const call_receiveContacts = (contacts) => ({
	type: AppConstants.CALL_RECEIVE_CONTACTS,
	contacts: contacts
})

const call_removeContact = (contactId) => ({
 	type: AppConstants.CALL_REMOVE_CONTACT,
	contactId
})

const call_updateContact = (contact) => ({
	type: AppConstants.CALL_UPDATE_CONTACT,
	contact
})

const editContact = (contact) => ({
	type: AppConstants.EDIT_CONTACT,
	contact
})

export {
	call_saveContact,
	call_receiveContacts,
	call_removeContact,
	call_updateContact,
	saveContact,
	receiveContacts,
	removeContact,
	updateContact,
	editContact
}

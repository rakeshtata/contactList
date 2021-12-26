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

const editContact = (contact) => ({
	type: AppConstants.EDIT_CONTACT,
	contact
})

export {saveContact, receiveContacts, removeContact, updateContact, editContact}

const initialState = {contacts:[],contactToEdit:""}

const AppReducer =  (state = initialState, action) => {
	switch (action.type) {
		case 'SAVE_CONTACT': {
			try {
				const contact = {...action.contact,id: action.id}
				if(!state.contacts) state.contacts = [] 
				return {...state,contacts: [...state.contacts,contact]}
			} catch(err) {
				return {...state}
			}
			
		} // 529848293
		case 'RECEIVE_CONTACTS':  {
			if(action.contacts) {
				return {...state,contacts: action.contacts}
			} else {
				return {...state,contacts: []}
			}
		}
		case 'REMOVE_CONTACT': {
			try {
				debugger
				const newContacts = [...state.contacts].filter((contact) => action.contactId !== contact.id)
				return  {...state,contacts: newContacts}
			} catch(err) {
				return {...state}
			}
		}	
		case 'UPDATE_CONTACT': {
			try {
				const rIndex = {...state.contacts}.findIndex((contact) => action.contactId === contact.id)
				const newContacts = {...state.contacts}.splice(rIndex,1,action.contact)
				return {...state, contactToEdit: '', contacts: newContacts}	
			} catch(err) {
				return {...state}
			}
		}
		case 'EDIT_CONTACT' : {
			return {...state, contactToEdit: action.contact}	
		}
		default:
			return state
	}
}
  
export default AppReducer

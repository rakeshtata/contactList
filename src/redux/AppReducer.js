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
			
		} 
		case 'RECEIVE_CONTACTS':  {
			if(action.contacts) {
				return {...state,contacts: action.contacts}
			} else {
				return {...state,contacts: []}
			}
		}
		case 'REMOVE_CONTACT': {
			try {
				const newContacts = [...state.contacts].filter((contact) => action.contactId !== contact.id)
				return  {...state,contacts: newContacts}
			} catch(err) {
				return {...state}
			}
		}	
		case 'UPDATE_CONTACT': {
			try {
				const rIndex = [...state.contacts].findIndex((contact) => action.contact.id === contact.id)
				state.contacts.splice(rIndex,1,action.contact)
				return {...state,contactToEdit: ''}	
			} catch(err) {
				return {...state}
			}
		}
		case 'EDIT_CONTACT' : {
			return {...state, contactToEdit: action.contact}	
		}
		case 'CALL_SAVE_CONTACT': 
			return state
		
		case 'CALL_RECEIVE_CONTACTS': 
			return state
		
		case 'CALL_REMOVE_CONTACT': 
			return state
		
		case 'CALL_UPDATE_CONTACT': 
			return state
		
		default:
			return state
	}
}
  
export default AppReducer

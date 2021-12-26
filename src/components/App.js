import React,{useEffect} from 'react'
import AddForm from './AddForm'
import EditForm from './EditForm'
import ContactList from './ContactList'
import { useSelector,useDispatch } from 'react-redux'
import {getContacts} from '../services/appAPI'

const App = () => {
    const contactToEdit = useSelector(state => state.contactToEdit)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts())
    },[])

    return(
        <div>
            {!contactToEdit || contactToEdit === ''
            ? <AddForm />
            : <EditForm/>
            }
            <ContactList/>
        </div>
    );

}

export default App;
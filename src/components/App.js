import React,{useEffect} from 'react'
import AddForm from './AddForm'
import EditForm from './EditForm'
import ContactList from './ContactList'
import { useSelector,useDispatch } from 'react-redux'
import { call_receiveContacts} from '../redux/actions'

const App = () => {
    const contactToEdit = useSelector(state => state.contactToEdit)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(call_receiveContacts())
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
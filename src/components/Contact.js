import React from 'react'
import {editContact} from '../redux/actions'
import {deleteContact} from '../services/appAPI'
import { useDispatch } from 'react-redux'

const Contact = ({...props}) => {
    const {contact} = props
    const dispatch = useDispatch()

    const handleRemove = (e,id) => {
        e.preventDefault()
		dispatch(deleteContact(id))
	}

	const handleEdit = (e,contact) => {
        e.preventDefault()
		dispatch(editContact(contact))
	}

    return(
        <tr>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td><a href="#" className="btn btn-default" onClick={(e) => handleEdit(e,contact)}>Edit</a> 
            <a href="#" className="btn btn-danger" onClick={(e) => handleRemove(e,contact.id)}>Remove</a></td>
        </tr>
    )


}

export default Contact
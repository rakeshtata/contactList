import React,{useRef} from 'react'
import {call_updateContact} from '../redux/actions'
import { useSelector,useDispatch } from 'react-redux'

const EditForm = () => {

    const contactToEdit = useSelector((state) => state.contactToEdit)
    const nameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault();

		var contact = {
			id: contactToEdit.id,
			name: nameRef.current.value.trim(),
			phone: phoneRef.current.value.trim(),
			email: emailRef.current.value.trim()
		}

		dispatch(call_updateContact(contact))
        nameRef.current.value = ''
        phoneRef.current.value = ''
        emailRef.current.value = ''
	}


    return(
        <div className="well">
            { contactToEdit &&
            <div>
            <h3>Edit Contact</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" ref={nameRef}  defaultValue={contactToEdit.name} className="form-control"  placeholder="Add Name..." />
                </div>	
                <div className="form-group">
                    <input type="text" ref={phoneRef} defaultValue={contactToEdit.phone} className="form-control" placeholder="Add Phone..." />
                </div>	
                <div className="form-group">
                    <input type="text" ref={emailRef} className="form-control" defaultValue={contactToEdit.email}  placeholder="Add Email..." />
                </div>	
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            }
        </div>
        
    )
}

export default EditForm;
import React,{useRef} from 'react'
import { useDispatch } from 'react-redux'
import {call_saveContact} from '../redux/actions'

const AddForm = () => {

    const nameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
		var contact = {
			name: nameRef.current.value.trim(),
			phone: phoneRef.current.value.trim(),
			email: emailRef.current.value.trim()
		}
		dispatch(call_saveContact(contact))
    }

    return(
        <div className="well">
            <h3>Add Contact</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" ref={nameRef} className="form-control" placeholder="Add Name..." />
                </div>	
                <div className="form-group">
                    <input type="text" ref={phoneRef} className="form-control" placeholder="Add Phone..." />
                </div>	
                <div className="form-group">
                    <input type="text" ref={emailRef} className="form-control" placeholder="Add Email..." />
                </div>	
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddForm
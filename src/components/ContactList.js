import React from 'react'
import Contact from './Contact.js'
import { useSelector } from 'react-redux'


const ContactList = (props) => {
    const contacts = useSelector(state => state.contacts)
    return(
        <div>
            <h3>Contacts</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts && contacts.map((contact, index) => {
                            return(
                                <Contact contact={contact} key={index} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ContactList
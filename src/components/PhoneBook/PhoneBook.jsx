import React, { Component } from 'react';
import shortid from 'shortid';

import styles from './PhoneBook.module.css'

import PhoneList from '../PhoneList'
import FormAddContact from '../FormAddContact'
import Filter from '../Filter'

import {state} from './initialState'

class PhoneBook extends Component {

    state = {
        ...state
    }

    componentDidMount() {
        const contactList = JSON.parse(localStorage.getItem("contacts"));
        this.setState({
            contacts: contactList || [],
        })
    }

    componentDidUpdate(){
        const {contacts} = this.state;
        const contactList = JSON.stringify(contacts);
        localStorage.setItem("contacts", contactList);
    }

    addContact = ({ name, number }) => {
        const con = {
            id: shortid.generate(),
            name,
            number,
        }
        
        this.setState(prevState => {
    
            const result = prevState.contacts.find(item => (item.name.toLowerCase() === name.toLowerCase() || item.number === number));

            if (result) {
                alert("Такой контакт уже есть!!!");
                return {
                    contacts: prevState.contacts,
                }
            } else {
                return {
                    contacts: [...prevState.contacts, con]
                }
            }
        })
    }

    deletItem = (idx) => {
        this.setState(({contacts})=>{
            const newList = [...contacts];
            newList.splice(idx, 1);
            return {
                contacts: newList,
            }
        });
    }

    handleFilter = ({target}) => {
        this.setState({ filter: target.value })
    }

    filterMurkup = () => {
        const normalozeFilter = this.state.filter.toLowerCase();
        const filterContacts = this.state.contacts.filter(({ name,number }) => {
            return name.toLowerCase().includes(normalozeFilter) || number.includes(normalozeFilter)
        })
        return filterContacts;
    }

    render() {
        const { state, addContact, deletItem, handleFilter,filterMurkup} = this;
        const { filter,contacts} = state;
        const list = contacts.length;
        
        const murkupList = () => {
            return (
                <>
                    {
                        (list > 3) ?
                            <Filter value={filter} onChange={handleFilter} />
                            :
                            ""
                    }

                    <table className={styles.tablePrice}>
                        <caption>Contacts</caption>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PhoneList key={shortid.generate()} contacts={filterMurkup()} onClick={deletItem}/>
                        </tbody>
                      </table>
                </ >
            )
        }

        return (
            <>
                <h1>Phonebook</h1>

                <FormAddContact onSubmit={addContact} />

                {(list > 0) ? murkupList() : <p>Not found Contact!!!</p>}
                
            </>
        )
    }
}

export default PhoneBook;
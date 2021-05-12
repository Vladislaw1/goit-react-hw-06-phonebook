import React from 'react';
import shortid from 'shortid';

import styles from './PhoneBook.module.css'

import PhoneList from '../PhoneListItem'
import FormAddContact from '../FormAddContact'
import Filter from '../Filter'

import { connect } from 'react-redux';

 const  filterMurkup = (contacts,filter) => {

    const normalozeFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(({ name,number }) => {
        return name.toLowerCase().includes(normalozeFilter) || number.includes(normalozeFilter)
    })
    return filterContacts;
}

const murkupList = (contacts, filter ) => {

    const list = contacts.length;

    return (
      <>
          {list > 3 ? <Filter /> : "" }

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
              <PhoneList key={shortid.generate()} contacts={filterMurkup(contacts, filter)} />
              </tbody>
          </table>
      </ >
    )
}

function PhoneBook({contacts,filter})  {

        const list = contacts.length;

        return (
            <>
                <h1>Phonebook</h1>

                <FormAddContact />

                {(list > 0) ? murkupList (contacts,filter): <p>Not found Contact!!!</p>}
                
            </>
        )
    }

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(PhoneBook)  ;
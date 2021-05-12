import React, {Component} from 'react';


import {connect} from 'react-redux';
import * as actions from "../../redux/actions"

import styles from './Form.module.css'
import fields from './fields'
import {state} from './initialState'

import shortid from 'shortid';

class Form extends Component {

    state = {
       ...state
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name,number} = this.state
        const { contacts,onSubmit } = this.props;
         const result = contacts.find(item => (item.name.toLowerCase() === name.toLowerCase() || item.number === number));
         result ? alert("Контакт уже существует!!!") : onSubmit(this.state)
             this.reset();
         }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]:value
        })
    }

    reset = () => {
        this.setState({
            name: "",
            number: "",
        })
    }

    render() {
        const { name, number } = this.state
        const inptIdName = shortid.generate();
        const inptIdNumber = shortid.generate();

        return (
          <>
              <form onSubmit={this.handleSubmit} className={styles.formPhonebook}>
                  <label htmlFor={inptIdName} className={styles.label}>
                      Name
                  </label>
                  <input
                    {...fields.userName}
                    className={styles.inputForm}
                    id={inptIdName}
                    onChange={this.handleChange}
                    value={name}
                  />

                  <label htmlFor={inptIdNumber} className={styles.label}>
                      Number
                  </label>
                  <input
                    className={styles.inputForm}
                    onChange={this.handleChange}
                    {...fields.userPhone}
                    id={inptIdNumber}
                    value={number}
                  />

                  <button type="submit" className={styles.btnAddContact}>Add contact</button>
              </form>
          </>
        );
    }
}

const mapStateToProps = state => {
    return{
        contacts: state.contacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: state => {
            dispatch(actions.addContact(state))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);
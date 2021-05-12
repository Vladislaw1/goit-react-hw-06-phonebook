import React from 'react';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';



const PhoneListItem = ({ contacts, onDelete }) => {

    const list = contacts.map(({name , number}, index) => {
        return (
            <>
                <tr>
                    <td>{name}</td>
                    <td>{number}</td>
                    <td>
                        <button type="button" onClick={() => onDelete(index)}>Delete</button>
                    </td>
                </tr>
            </>
    )
    })
    return list;
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: idx => {
            dispatch(actions.deleteContact(idx))
        }
    }
}

export default  connect(null,mapDispatchToProps)(PhoneListItem);
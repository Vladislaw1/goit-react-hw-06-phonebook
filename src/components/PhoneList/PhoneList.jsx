import React from 'react';



const PhoneList = ({ contacts, onClick }) => {

    const list = contacts.map(({name , number}, index) => {
        return (
            <>
                <tr>
                    <td>{name}</td>
                    <td>{number}</td>
                    <td>
                        <button type="button" onClick={() => onClick(index)}>Delete</button>      
                    </td>
                </tr>
            {/* <li key={id} className={styles.PhoneListItem}>
                {name} - {number}
                <button type="button" onClick={() => onClick(index)} className={styles.btnDelet}>Delete</button>
                </li> */}
            </>
    )
    })
    return list;
};

export default PhoneList;
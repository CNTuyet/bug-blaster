import React from 'react'

const TicketItem = ({ ticket, dispatch }) => {
    const { id, title, description, priority } = ticket;
    const priorityClass = {
        1: 'priority-low',
        2: 'priority-medium',
        3: 'priority-high'
    };
    return (
        <div className='ticket-item'>
            <div className={`ticket-dot ${priorityClass[priority]}`}></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button
                type='button'
                className='button'
                onClick={() => dispatch({ type: 'DELETE_TICKET', id: id })}
            > DELETE </button>
            <button
                type='button'
                className='button'
                onClick={() =>
                    dispatch({ type: 'SET_EDITING_TICKET', ticket: ticket })
                }
            > UPDATE </button>
        </div>
    )
}

export default TicketItem
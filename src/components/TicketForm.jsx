import React, { useState, useEffect } from 'react'

const TicketForm = ({ dispatch, editingTicket }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    const priorityLabels = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    };

    useEffect(() => {
        // Nếu có 1 editingTicket thì phải hiển thị thông tin của nó lên form
        if (editingTicket) {
            setTitle(editingTicket.title);
            setDescription(editingTicket.description);
            setPriority(editingTicket.priority);
        }
        else {
            clearForm();
        }
    }, [editingTicket]);

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    const handleSubmit = (e) => {
        // Ngăn chặn sự kiện mặc định tự reload khi submit form
        e.preventDefault();
        const ticketData = {
            // Chỉ tạo id mới nếu không phải là editingTicket
            id: editingTicket ? editingTicket.id : new Date().toISOString(),
            title,
            description,
            priority
        }
        dispatch({
            type: editingTicket ? 'UPDATE_TICKET' : 'ADD_TICKET',
            ticket: ticketData
        })
        clearForm();
    }

    return (
        <form className="ticket-form" onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    className='form-input'
                    onChange={e => setTitle(e.target.value)}
                />
            </div>

            <div>
                <label>Description</label>
                <textarea
                    type="text"
                    value={description}
                    className='form-input'
                    onChange={e => setDescription(e.target.value)}
                ></textarea>
            </div>
            {/* Nhóm các trường có liên quan trong form lại với nhau */}
            <fieldset className='priority-fieldset'>
                {/* Tiêu đề cho fieldset */}
                <legend>Priority</legend>
                {
                    // Object.entries(obj) lấy tất cả các cặp key-value của obj, trả về mảng
                    Object.entries(priorityLabels).map(([value, label]) => (
                        <label key={value} className='priority-label'>
                            <input
                                type="radio"
                                value={value}
                                checked={priority === value}
                                className='priority-input'
                                onChange={() => setPriority(value)} />
                            {label}
                        </label>
                    ))
                }
            </fieldset>
            <button type='submit' className='button'>
                Submit
            </button>
            {editingTicket && (
                <button className='button' onClick={() => dispatch({ type: 'CLEAR_EDITING_TICKET' })}>
                    Cancel Edit
                </button>
            )}
        </form>
    )
}

export default TicketForm
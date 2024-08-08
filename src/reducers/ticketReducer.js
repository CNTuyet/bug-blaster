const ticketReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TICKET':
            return {
                // tham số đầu tiên là bản copy của state cũ, tham số thứ 2 là giá trị của state sau khi update
                ...state, tickets: [...state.tickets, action.ticket]
            };
        case 'UPDATE_TICKET':
            return {
                ...state,
                tickets: state.tickets.map((t) =>
                    t.id === action.ticket.id ? action.ticket : t
                )
            };
        case 'DELETE_TICKET':
            if (state.editingTicket && state.editingTicket.id === action.id) {
                return {
                    ...state,
                    tickets: state.tickets.filter((t) => t.id !== action.id),
                    editingTicket: null
                };
            }
            else {
                return {
                    ...state,
                    tickets: state.tickets.filter((t) => t.id !== action.id)
                };
            }

        case 'SET_EDITING_TICKET':
            return {
                ...state, editingTicket: action.ticket
            };
        case 'CLEAR_EDITING_TICKET':
            return {
                ...state, editingTicket: null
            };
        default:
            return state;
    }
}

export default ticketReducer
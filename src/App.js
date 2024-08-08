import './App.css';
import './styles.css'
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer.js'
import TicketList from './components/TicketList.jsx';
import sortTickets from './utilities/sortingUtilities.js';

function App() {
  const initialState = { tickets: [], editingTicket: null, sortPreference: 'High to Low' };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
        <TicketForm
          editingTicket={state.editingTicket}
          dispatch={dispatch}
        />
        {/* Nếu có ticket trong state thì hiển thị thẻ h2 */}
        {state.tickets.length > 0 && (
          <div className='results'>
            <h2>All Tickets</h2>
            <select onChange={(e) => dispatch({ type: 'SET_SORTING', sortMethod: e.target.value })}>
              <option value='High to Low'>High to Low</option>
              <option value='Low to High'>Low to High</option>
            </select>
            <TicketList
              tickets={sortedTickets}
              dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer.js'
import './styles.css'
import TicketList from './components/TicketList.jsx';

function App() {
  const initialState = { tickets: [], editingTicket: null };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
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
            <TicketList
              tickets={state.tickets}
              dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

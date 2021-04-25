import React from 'react';
import './Ticket.css';

const Ticket = ({name,price}) => {
    return (
        <div className="ticket-container">
            <div className="ticket">
                <h3><img src="https://i.ibb.co/HtYXGQC/tickets-3.png" alt="tickets-3" border="0"></img> {name}</h3>
            </div>
            <div className="price">
                <h3> $ {price}</h3>
            </div>
        </div>
    );
};

export default Ticket;
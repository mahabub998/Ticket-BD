import React, { useContext } from 'react';
import { AddressContext } from '../Destination/Destination';
import Ticket from '../Ticket/Ticket';
import './DestinationSearch.css';
const tickets = [{ name:'Ticket 1',price:67},{ name:'Ticket 2',price:77},{ name:'Ticket 3',price:87}]

const DestinationSearch = () => {
    const [address, setAddress] = useContext(AddressContext);
    return (
        <div>
            <div className="address-container">
                <h4>Pick From: { address.location}</h4>
                <h4>Drop To: {address.destination}</h4>
            </div>
            <div className="tickets-container">
                {
                tickets.map((ticket)=><Ticket name={ticket.name} price={ticket.price}></Ticket>)
            }
            </div>
        </div>
    );
};

export default DestinationSearch;
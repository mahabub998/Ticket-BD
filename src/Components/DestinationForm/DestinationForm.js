import React, { useContext } from 'react';
import { AddressContext } from '../Destination/Destination';
import './DestinationForm.css'

const DestinationForm = () => {
    const [address, setAddress] = useContext(AddressContext);
    const handleOnBlur = (event) => {
        
        const eventName = event.target.name;
        const eventValue = event.target.value;
        console.log(eventName, eventValue);
        if (eventName === 'location') {
            console.log('in the location');
            const newAddress = { ...address };
            newAddress.location = eventValue;
            setAddress(newAddress);
            
            console.log(address);
        }
        if (eventName === 'destination') {
            console.log('in the destination');
            const newAddress = { ...address };
            newAddress.destination = eventValue;
            setAddress(newAddress);
            console.log(address);
        }
    };
    return (
        <div className="destination-form-container">
            <form>
                <div className="mb-3">
					<label className="form-label">Pick From</label>
					<input
						type="text"
						className="form-control"
						name="location"
						id=""
						placeholder="Enter your location"
						onBlur={handleOnBlur}
						required
					/>
			</div>
            <div className="mb-3">
					<label className="form-label">Drop To</label>
					<input
						type="text"
						className="form-control"
						name="destination"
						id=""
						placeholder="Enter your destination"
						onBlur={handleOnBlur}
						required
					/>
			</div>
            </form>
        </div>
    );
};

export default DestinationForm;
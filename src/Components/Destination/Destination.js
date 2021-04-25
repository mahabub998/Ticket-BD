import React, { createContext, useState } from 'react';
import DestinationForm from '../DestinationForm/DestinationForm';
import DestinationSearch from '../DestinationSearch/DestinationSearch';
import { GoogleMap } from '../GoogleMap/GoogleMap';
import Map from '../Map/Map';
import './Destination.css';
export const AddressContext = createContext();

const Destination = () => {
	const [ isSearched, setIsSearched ] = useState(false);
	const [ address, setAddress ] = useState({ location: 'Mirpur 1', destination: 'Dhanmondi' });

	const handleClick = () => {
		setIsSearched(!isSearched);
	};

	return (
		<AddressContext.Provider value={[ address, setAddress ]}>
			<div className="container">
				<div className="inner-destination">
					<div className="destination-container">
						{isSearched ? <DestinationSearch /> : <DestinationForm />}
						<div className="button-container">
							<button className="btn custom-button" onClick={handleClick}>
								{isSearched ? 'Back' : 'Search'}
							</button>
						</div>
					</div>
					<div className="map-container">
						<Map />
						<GoogleMap />
					</div>
				</div>
			</div>
		</AddressContext.Provider>
	);
};

export default Destination;

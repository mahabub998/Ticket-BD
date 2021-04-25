import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const mapStyles = {
	width: '100%',
	height: '100%'
};

export class GoogleMap extends Component {
	render() {
		return (
            <div>
                <h4>this is from google map</h4>
                <p>sorry! couldn't get Api Key!</p>
				<Map
					google={this.props.google}
					zoom={14}
					style={mapStyles}
					initialCenter={{
						lat: -1.2884,
						lng: 36.8233
					}}
				/>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'
})(GoogleMap);

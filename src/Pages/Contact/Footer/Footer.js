import { useState } from 'react';
import { Wrapper } from './Footer.styles';
import { StyledTitle } from '../../../GlobalStyledComponents/StyledTitle';
import { StyledTitleOrnament } from '../../../GlobalStyledComponents/StyledTitleOrnament';
import MapPicker from 'react-google-map-picker';

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;
const API_KEY = 'test';

const Footer = () => {
	const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

	const [location, setLocation] = useState(defaultLocation);
	const [zoom, setZoom] = useState(DefaultZoom);

	function handleChangeLocation(lat, lng) {
		setLocation({ lat: lat, lng: lng });
	}

	function handleChangeZoom(newZoom) {
		setZoom(newZoom);
	}

	function handleResetLocation() {
		setDefaultLocation({ ...DefaultLocation });
		setZoom(DefaultZoom);
	}

	return (
		<Wrapper>
			<StyledTitle>
				Find Us on Google Maps
				<StyledTitleOrnament />
			</StyledTitle>

			<button onClick={handleResetLocation}>Reset Location</button>
			<MapPicker
				defaultLocation={defaultLocation}
				zoom={zoom}
				mapTypeId="roadmap"
				style={{ height: '500px' }}
				onChangeLocation={handleChangeLocation}
				onChangeZoom={handleChangeZoom}
				apiKey={API_KEY}
			/>
		</Wrapper>
	);
};

export default Footer;

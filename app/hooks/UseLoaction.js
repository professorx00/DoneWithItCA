import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default useLocation = () => {
	const [location, setLocation] = useState();

	const getLocation = async () => {
		try {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				return;
			}

			let results = await Location.getLastKnownPositionAsync({});
			setLocation({
				long: results.coords.longitude,
				lat: results.coords.latitude,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return location;
};

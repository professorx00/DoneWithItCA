import React, { useEffect, useState } from 'react';
import {
	TouchableWithoutFeedback,
	Image,
	View,
	Button,
	Text,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageButton from './ImageButton';
import ImageInput from './ImageInput';
import ImageInputList from './ImageInputList';

function ImageSelector(props) {
	const [imageUris, setImageUris] = useState([]);

	const handleAdd = (uri) => {
		setImageUris([...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		newImageArray = imageUris.filter((imageUri) => {
			return imageUri !== uri;
		});
		setImageUris(newImageArray);
	};

	return (
		<View>
			<ImageInputList
				imageUris={imageUris}
				onRemoveImage={handleRemove}
				onAddImage={handleAdd}
			/>
		</View>
	);
}

export default ImageSelector;

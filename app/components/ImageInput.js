import React, { useEffect } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableWithoutFeedback,
	Alert,
} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({ imageUri, onChangeImage }) {
	const handlePress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert('Delete', 'Are you sure you want to delete this image?', [
				{ text: 'Yes', onPress: () => onChangeImage() },
				{ text: 'No' },
			]);
	};

	const requestPermission = async () => {
		try {
			const permission =
				await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (!permission.granted) {
				alert('You Need to enable permission to access media library');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) {
				onChangeImage(result.uri);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		requestPermission();
	}, []);

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						name='camera'
						size={30}
						color={colors.medium}
					/>
				)}
				{imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.light,
		borderRadius: 15,
		height: 100,
		justifyContent: 'center',
		overflow: 'hidden',
		width: 100,
	},
	image: {
		height: '100%',
		width: '100%',
	},
});

export default ImageInput;

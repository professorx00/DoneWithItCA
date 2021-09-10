import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
	AppForm as Form,
	AppFormField as FormField,
	AppFormPicker as Picker,
	SubmitButton,
} from '../components/Forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/Forms/FormImagePicker';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import UseLoaction from '../hooks/UseLoaction';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	description: Yup.string().label('Description'),
	category: Yup.object().required().nullable().label('Category'),
	images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
	{ label: 'Furniture', value: 1, backgroundColor: 'salmon', icon: 'apps' },
	{ label: 'Cars', value: 2, backgroundColor: 'teal', icon: 'email' },
	{ label: 'Camera', value: 3, backgroundColor: 'green', icon: 'lock' },
	{ label: 'Games', value: 4, backgroundColor: 'red', icon: 'apps' },
	{ label: 'Clothing', value: 5, backgroundColor: 'blue', icon: 'email' },
	{ label: 'Sports', value: 6, backgroundColor: 'green', icon: 'lock' },
	{ label: 'Movies and Music', value: 7, backgroundColor: 'red', icon: 'apps' },
	{ label: 'Books', value: 8, backgroundColor: 'blue', icon: 'email' },
	{ label: 'Other', value: 9, backgroundColor: 'green', icon: 'lock' },
];

function ListingEditScreen() {
	const location = UseLoaction();
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await listingsApi.addListing(
			{ ...listing, location },
			(progress) => setProgress(progress),
		);
		if (!result.ok) {
			setUploadVisible(false);
			return alert('Could not save the listings');
		}

		resetForm();
	};

	return (
		<Screen style={styles.container}>
			<UploadScreen
				progress={progress}
				onDone={() => setUploadVisible(false)}
				visible={uploadVisible}
			/>
			<Form
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
					images: [],
				}}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}>
				<FormImagePicker name='images' />
				<FormField maxLength={255} name='title' placeholder='Title' />
				<FormField
					keyboardType='numeric'
					maxLength={8}
					name='price'
					placeholder='Price'
					width={120}
				/>
				<Picker
					items={categories}
					name='category'
					numberOfCols={3}
					PickerItemComponent={CategoryPickerItem}
					placeholder='Category'
					width='50%'
				/>
				<FormField
					maxLength={255}
					multiline
					name='description'
					numberOfLines={3}
					placeholder='Description'
				/>
				<SubmitButton title='Post' />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
export default ListingEditScreen;

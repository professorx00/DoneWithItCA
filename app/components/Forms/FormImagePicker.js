import React from 'react';
import { ErrorMessage } from '.';
import ImageInputList from '../ImageInputList';
import { useFormikContext } from 'formik';

function FormImagePicker({ name }) {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	const imageUris = values[name];

	const handleAdd = (uri) => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const handleRemove = async (uri) => {
		newImageArray = imageUris.filter((imageUri) => {
			return imageUri !== uri;
		});
		await setFieldValue(name, newImageArray);
	};

	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default FormImagePicker;

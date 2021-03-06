import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import {
	ListItem,
	ListItemDeleteAction,
	ListItemSeparator,
} from '../components/lists';

const ispum =
	"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";

const initialMessages = [
	{
		id: 1,
		title: 'David Ward',
		description:
			'Please let me know when the next avaiable appointment is. I need some goods. ',
		image: require('../assets/mosh.jpg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/mosh.jpg'),
	},
];

function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		// Delete the message from messages
		setMessages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Message selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: 'T2',
							description: 'D2',
							image: require('../assets/mosh.jpg'),
						},
					]);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});

export default MessagesScreen;

import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

type Props = {
	route: {
		params: {
			itemDetails: {};
		};
	};
};

const DetailsScreen = (props: Props) => {
	return (
		<ScrollView testID="details-screen">
			<View style={styles.screen}>
				<View style={styles.card}>
					<View style={styles.cardInfo}>
						<Text>{JSON.stringify(props.route.params.itemDetails)}</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: 30,
	},
	card: {
		elevation: 8,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.7,
		shadowRadius: 8,
		borderRadius: 10,
		backgroundColor: 'white',
		marginBottom: 20,
		padding: 10,
	},
	cardInfo: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	cardTitle: {
		fontWeight: 'bold',
	},
});

export default DetailsScreen;

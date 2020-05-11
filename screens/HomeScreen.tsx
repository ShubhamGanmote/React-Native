import React, { useEffect, useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { getPollingData, resetData } from '../redux/actions/PollingAction';
import { PollingData } from '../types/types';
import Colors from '../styles/Colors';

type Props = {
	getPollingData: Function;
	polling: PollingData;
	resetData: Function;
	navigation: {
		navigate: Function;
	};
};

const HomeScreen = (props: Props) => {
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(0);

	useEffect(() => {
		setLoading(true);
		props.getPollingData(0);
		setLoading(false);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			updatePolling(page + 1);
			setPage(page + 1);
		}, 10000);
		return () => {
			clearInterval(timeout);
			props.resetData();
		};
	}, [page]);

	const updatePolling = (page: number) => {
		setLoading(true);
		props.getPollingData(page);
		setLoading(false);
	};

	const handleClickEvent = (item: PollingData) => {
		props.navigation.navigate('Details Screen', { itemDetails: item });
	};

	return (
		<View testID="home-screen">
			<FlatList
				data={props.polling.pollingData}
				keyExtractor={(item: any) => item.created_at_i.toString()}
				onEndReached={() => {
					updatePolling(page + 1);
					setPage(page + 1);
				}}
				onEndReachedThreshold={0.5}
				renderItem={(itemData) => {
					return (
						<TouchableOpacity onPress={() => handleClickEvent(itemData.item)}>
							<View style={styles.card}>
								<View style={styles.cardInfo}>
									<Text style={styles.cardTitle}>Title</Text>
									<Text>{itemData.item.title}</Text>
								</View>
								<View style={styles.cardInfo}>
									<Text style={styles.cardTitle}>URL</Text>
									<Text>{itemData.item.url}</Text>
								</View>
								<View style={styles.cardInfo}>
									<Text style={styles.cardTitle}>Created At</Text>
									<Text>{itemData.item.created_at}</Text>
								</View>
								<View style={styles.cardInfo}>
									<Text style={styles.cardTitle}>Author</Text>
									<Text>{itemData.item.author}</Text>
								</View>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
			{loading && <ActivityIndicator size='large' color={Colors.accentColor} />}
		</View>
	);
};

const styles = StyleSheet.create({
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

const mapStateToProps = (state: { polling: PollingData }) => ({
	polling: state.polling,
});

export default connect(mapStateToProps, { getPollingData, resetData })(
	HomeScreen
);

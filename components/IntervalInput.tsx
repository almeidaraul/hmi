import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { NumericalInput } from './NumericalInput';

export type Interval = {
	hour: number;
	sf: number;
	ci: number;
};

export function IntervalInput(props) {
	return (
		<View style={styles.container}>
			<Text>oi</Text>
		</View>
	);
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start'	
		},
});

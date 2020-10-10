import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';
import Colors from '../constants/Colors';
const STRINGS = require('../assets/strings.js');

export default function IntervalInputGuide() {
	return (
		<View style={styles.container}>
			<View style={styles.aboveText}>
				<Text style={styles.text}>
				  {STRINGS.hour}
				</Text>
			</View>
			<View style={styles.aboveInput}>
				<Text style={styles.text}>
				  {STRINGS.carb_insulin}
				</Text>
			</View>
			<View style={styles.aboveInput}>
				<Text style={styles.text}>
				  {STRINGS.sensibility_factor}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginVertical: 2,
			width: 242,
		},
		aboveInput: {
			width: 75,
			margin: 5,
			alignItems: 'center',
		},
		aboveText: {
			marginRight: 5,
		},
		text: {
			textDecorationLine: 'underline',
			fontWeight: 'bold',
		}
});

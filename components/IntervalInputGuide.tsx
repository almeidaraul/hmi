import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';
import Colors from '../constants/Colors';

export default function IntervalInputGuide() {
	return (
		<View style={styles.container}>
			<View style={styles.aboveText}>
				<Text style={styles.text}>
					HH:
				</Text>
			</View>
			<View style={styles.aboveInput}>
				<Text style={styles.text}>
					C:I
				</Text>
			</View>
			<View style={styles.aboveInput}>
				<Text style={styles.text}>
					SF
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

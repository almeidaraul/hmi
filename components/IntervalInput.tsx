import * as React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { Text, View, useThemeColor } from './Themed';
import NumericalInput from './NumericalInput';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export function IntervalInput() {
	const [ci, setCI] = React.useState("20");
	const [fs, setFS] = React.useState("35");

	return (
		<View style={styles.container}>
			<Text style={styles.text}>20h-20h59:</Text>
			<NumericalInput
				style={styles.input}
				placeholder="100"
				onChangeText={text => setCI(text)}
				defaultValue={ci}
				maxLength={2}
			/>
			<NumericalInput
				style={styles.input}
				placeholder="100"
				onChangeText={text => setFS(text)}
				defaultValue={fs}
				maxLength={2}
			/>
			<CopyButton/>
			<PasteButton/>
		</View>
	);
}

const CopyButton = () => {
	const lightColor = Colors.light.buttonIconDefault;
	const darkColor = Colors.dark.buttonIconDefault;
	const color = useThemeColor({ light: lightColor, dark: darkColor });

	return (
		<TouchableHighlight>
			<AntDesign name="copy1" size={24} color={color}/>
		</TouchableHighlight>	
	);
}

const PasteButton = () => {
	const lightColor = Colors.light.buttonIconDefault;
	const darkColor = Colors.dark.buttonIconDefault;
	const color = useThemeColor({ light: lightColor, dark: darkColor });

	return (
		<TouchableHighlight>
			<MaterialIcons name="content-paste" size={24} color={color}/>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginVertical: 2,
		},
		text: {
			margin: 5,
		},
		input: {
			margin: 5,
			textAlign: 'center',
		},
});

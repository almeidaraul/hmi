import * as React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { Text, View, useThemeColor } from './Themed';
import NumericalInput from './NumericalInput';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export type IntervalInfo = {
	ci: string,
	fs: string,
}

type IntervalInputProps = IntervalInfo & {
	hour: number,
	setCI: (h: number) => void,	
	setFS: (h: number) => void,
	copy: () => void,
	paste: () => void,
}

export function IntervalInput(props: IntervalInputProps) {
	const formattedHour = () => {
		if (props.hour > 9) return String(props.hour);
		else return String('0'+props.hour);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{formattedHour()}:</Text>
			<NumericalInput
				style={styles.input}
				placeholder="100"
				onChangeText={text => props.setCI(text)}
				defaultValue={props.ci}
				maxLength={2}
			/>
			<NumericalInput
				style={styles.input}
				placeholder="100"
				onChangeText={text => props.setFS(text)}
				defaultValue={props.fs}
				maxLength={2}
			/>
			<CopyButton onPress={props.copy}/>
			<PasteButton onPress={props.paste}/>
		</View>
	);
}

const CopyButton = ({ onPress }: () => void) => {
	const lightColor = Colors.light.buttonIconDefault;
	const darkColor = Colors.dark.buttonIconDefault;
	const color = useThemeColor({ light: lightColor, dark: darkColor });

	return (
		<TouchableHighlight onPress={onPress}>
			<AntDesign name="copy1" size={24} color={color}/>
		</TouchableHighlight>	
	);
}

const PasteButton = ({ onPress }: () => void) => {
	const lightColor = Colors.light.buttonIconDefault;
	const darkColor = Colors.dark.buttonIconDefault;
	const color = useThemeColor({ light: lightColor, dark: darkColor });

	return (
		<TouchableHighlight onPress={onPress}>
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

import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View, useThemeColor } from './Themed';
import NumericalInput from './NumericalInput';

import { AntDesign } from '@expo/vector-icons';

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
	editLock: boolean,
}

type IntervalButtonProps = {
	onPress: () => void,
	name: string,
	editLock: boolean,
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
				onChangeText={text => !props.editLock && props.setCI(text)}
				defaultValue={props.ci}
				maxLength={2}
				editable={!props.editLock}
			/>
			<NumericalInput
				style={styles.input}
				placeholder="100"
				onChangeText={text => !props.editLock && props.setFS(text)}
				defaultValue={props.fs}
				maxLength={2}
				editable={!props.editLock}
			/>
			<IntervalButton
				onPress={() => console.log("TODO")}
				editLock={props.editLock}
				name="copy1"
			/>
			<IntervalButton
				onPress={() => console.log("TODO")}
				editLock={props.editLock}
				name="delete"
			/>
		</View>
	);
}

const IntervalButton = (props: IntervalButtonProps) => {
	const lightColor = Colors.light.buttonIconDefault;
	const darkColor = Colors.dark.buttonIconDefault;
	const color = useThemeColor({ light: lightColor, dark: darkColor });
	const style = props.editLock ? styles.lowOpacity : styles.normalOpacity;
	return (
		<TouchableOpacity
			onPress={props.onPress}
		>
			<AntDesign name={props.name} size={24} color={color} style={style}/>
		</TouchableOpacity>	
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
		lowOpacity: {
			opacity: 0.4,
		},
		normalOpacity: {
			opacity: 1,
		},
});

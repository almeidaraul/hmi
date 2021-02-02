import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View, useThemeColor } from './Themed';
import NumericalInput from './NumericalInput';

import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useStrings from '../assets/useStrings';
const Strings = useStrings();

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
			<View style={styles.intervalContainer}>
				<Text style={styles.intervalText}>{formattedHour()}:00</Text>
			</View>
			<View style={styles.inputContainer}>
				<View style={styles.inputSubContainer}>
					<View style={styles.inputSubTextContainer}>
						<Text style={styles.inputGuideText}>
							{ Strings.carb_insulin }:
						</Text>
					</View>
					<NumericalInput
						style={styles.input}
						placeholder="100"
						onChangeText={text => !props.editLock && props.setCI(text)}
						defaultValue={props.ci}
						maxLength={2}
						editable={!props.editLock}
					/>
				</View>
				<View style={styles.inputSubContainer}>
					<View style={styles.inputSubTextContainer}>
						<Text style={styles.inputGuideText}>
							{ Strings.sensibility_factor }:
						</Text>
					</View>
					<NumericalInput
						style={styles.input}
						placeholder="100"
						onChangeText={text => !props.editLock && props.setFS(text)}
						defaultValue={props.fs}
						maxLength={2}
						editable={!props.editLock}
					/>
				</View>
			</View>
			<View style={styles.buttonsContainer}>
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
			style={styles.buttonWrapper}
			onPress={props.onPress}
		>
			<AntDesign name={props.name} size={30} color={color} style={style}/>
		</TouchableOpacity>	
	);
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginVertical: 4,
		},
		intervalContainer: {
			borderColor: Colors.light.tabIconDefault,
			borderStyle: 'solid',
			borderWidth: 1,
			borderRadius: 3,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100%',
			padding: 15,
			marginRight: 5,
		},
		inputContainer: {
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputSubContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputSubTextContainer: {
			height: '100%',
			minWidth: 35,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		inputGuideText: {
			textAlign: 'left',
			fontWeight: 'bold',
		},
		buttonsContainer: {
			height: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		buttonWrapper: {
			height: '100%',
			padding: 5,
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		intervalText: {
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

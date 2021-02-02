import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeColor } from './Themed';
import Colors from '../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

type AddButtonProps = {
	editLock: boolean,
	onPress: () => void,
}

export function AddButton(props: AddButtonProps) {
	const lightColor = Colors.light.buttonIconDefault;
	const darkColor = Colors.dark.buttonIconDefault;
	const color = useThemeColor({ light: lightColor, dark: darkColor });
	const style = props.editLock ? styles.lowOpacity : styles.normalOpacity;

	return (
		<TouchableOpacity style={styles.buttonWrapper}>
			<MaterialIcons name="add-circle-outline" size={48} color={color} style={style} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
		buttonWrapper: {
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			marginVertical: 2,
			padding: 15,
		},
		lowOpacity: {
			opacity: 0.4,
		},
		normalOpacity: {
			opacity: 1,
		},
});

import * as React from 'react';
import { View, TextInput, useThemeColor } from './Themed';
import Colors from '../constants/Colors.ts';

type NumericalInputProps = TextInputProps;

export default function NumericalInput(props: NumericalInputProps) {
	return (
			<TextInput {...props}
				style={[props.style,
					{
						height: 30,
						width: 75,
						padding: 5,
						fontSize: 15,
						borderRadius: 1,
					}]}
				lightColor={Colors.light.tabIconDefault}
				darkColor={Colors.light.highlightedText}
				keyboardType="numeric"
			/>
	);
}

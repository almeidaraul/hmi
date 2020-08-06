import * as React from 'react';
import { View, TextInput, useThemeColor } from './Themed';

type NumericalInputProps = TextInputProps & { allowDecimal : bool };

export default function NumericalInput(props: NumericalInputProps) {
	return (
			<TextInput {...props}
				style={[props.style,
					{
						height: 40,
						width: 75,
					}]}
				darkColor="red"
				lightColor="blue"
				keyboardType="numeric"
				maxLength={props.allowDecimal ? 5 : 3}
			/>
	);
}

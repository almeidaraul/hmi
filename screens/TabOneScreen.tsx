import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import NumericalInput from '../components/NumericalInput';

export default function TabOneScreen() {
	const [bg, setBG] = React.useState("100");
	const [carbs, setCarbs] = React.useState("0");

  return (
    <View style={styles.container}>
			<View style={styles.input_container}>
				<Text style={styles.title}>BG: </Text>
				<NumericalInput
					placeholder="100"
					onChangeText={text => setBG(text)}
					defaultValue={bg}
					allowDecimal={false}
				/>
				<Text style={styles.title}>Carbs: </Text>
				<NumericalInput
					placeholder="0"
					onChangeText={text => setCarbs(text)}
					defaultValue={carbs}
					allowDecimal={true}
				/>
			</View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
	input_container: {
		width: '50%',
		alignItems: 'flex-start',
		justifyContent: 'center',
		minHeight: 0,
	},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

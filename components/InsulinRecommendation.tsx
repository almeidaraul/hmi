import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

type InsulinRecommendationProps = {
	bg: string,
	carbs: string,
};

export default function InsulinRecommendation(props: InsulinRecommendationProps) {
	let fs_now = 35;
	let ci_now = 20;
	let fs_next = 30;
	let ci_next = 17;

	const calculateInsulin = ({ now } : boolean) => {
		let insulin: number;
		if (now)
			insulin = Number(props.carbs)/ci_now + (Number(props.bg)-100)/fs_now;
		else
			insulin = Number(props.carbs)/ci_next + (Number(props.bg)-100)/fs_next;
		return Math.max(0, Math.round(insulin));
	};
	
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.text}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
					You should take { calculateInsulin('now') } { calculateInsulin('now') != 1 ? "units " : "unit " }
					of insulin now or Y in 15 minutes (12:03).
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  text: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});

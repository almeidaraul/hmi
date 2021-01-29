import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { defaultIntervals, getIntervals } from '../constants/persistentStorageFunctions';
import { Text, View } from './Themed';

import useStrings from '../assets/useStrings';

type InsulinRecommendationProps = {
	bg: string,
	carbs: string,
};

export default function InsulinRecommendation(props: InsulinRecommendationProps) {
	const [intervals, setIntervals] = React.useState(defaultIntervals);
	React.useEffect(() => {getIntervals().then((value) => setIntervals(value))}, []);
	const Strings = useStrings();

	const in15minutes = () => {
		const zeroBehind = (a) => {
			return a > 9 ? String(a) : '0'+a;
		};

		const time = new Date(new Date().getTime()+15*60000);

		return zeroBehind(time.getHours())+':'+zeroBehind(time.getMinutes());
	}


	const calculateInsulin = ({ now } : boolean) => {
		const toIndex = (value: number) => {
			return (value-value%2)/2;
		};

		const time = new Date();
		const currentHour = toIndex(time.getHours());
		const nextHour = toIndex((new Date(time.getTime()+15*60000)).getHours());
		const fs_now = intervals[currentHour].fs;
		const ci_now = intervals[currentHour].ci;
		const fs_next = intervals[nextHour].fs;
		const ci_next = intervals[nextHour].ci;

		let insulin: number;
		if (now) {
			insulin = Number(props.carbs)/ci_now + (Number(props.bg)-100)/fs_now;
		}
		else
			insulin = Number(props.carbs)/ci_next + (Number(props.bg)-100)/fs_next;
		return Math.max(0, Math.round(insulin));
	};

  const recomendation_string = () => {
		var u = calculateInsulin(true);
		var i = calculateInsulin(false);
		var content_raw = u == 1 ? Strings.take_now_singular : Strings.take_now_plural;
		content_raw = content_raw.split('%');
		return content_raw[0] + u + content_raw[1] + i + content_raw[2] + in15minutes() + content_raw[3];
  }
	
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.text}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
				>
					{recomendation_string()}
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

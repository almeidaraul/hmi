import { Platform, NativeModules } from 'react-native'
import { get_strings } from '../assets/strings.js';

export default function useStrings() {
	const getLocale = () => {
		const deviceLanguage =
			Platform.OS === 'ios'
			? NativeModules.SettingsManager.settings.AppleLocale ||
				NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
			: NativeModules.I18nManager.localeIdentifier;

		return deviceLanguage;
	}

  return get_strings(getLocale());
}

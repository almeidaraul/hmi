const content = {
	"en_US": {
		home: "Home",
		settings: "Settings",
		bg: "BG: ",
		carbs: "Carbs: ",
		take_now_singular: "You should take % unit of insulin now or % in 15 minutes (%).",
		take_now_plural: "You should take % units of insulin now or % in 15 minutes (%).",
		changes_are_saved: "Changes are automatically saved.",
		hour: "HH:",
		carb_insulin: "C:I",
		sensibility_factor: "SF",
	},
	"de_DE": {
		home: "Startseite",
		settings: "Einstellungen",
		bg: "Blutzucker: ",
		carbs: "Kohlenhydrate: ",
		take_now_singular: "Du solltest % Einheit Insulin jetzt oder % in 15 Minuten einnehmen (%).",
		take_now_plural: "Du solltest % Einheiten Insulin jetzt oder % in 15 Minuten einnehmen (%).",
		changes_are_saved: "Änderungen werden automatisch gespeichert.",
		hour: "HH:",
		carb_insulin: "IC",
		sensibility_factor: "ISF",
	},
};


var default_lang = "en_US";

const get_strings = (lang) => {
	if (content[lang])
		return content[lang];
	else
		return content["en_US"];
};

var strings = {
	lang: default_lang,
	strings: get_strings(default_lang),
	get_strings: get_strings,
}

module.exports = strings; 

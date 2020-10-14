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
	"cs": {
		home: "Domů",
		settings: "Nastavení",
		bg: "Krevní cukr: ",
		carbs: "Sacharidy: ",
		take_now_singular: "Měl(a) byste si vzít % jednotku inzulinu nyní nebo % za 15 minut (%).",
		take_now_plural: "Měl(a) byste si vzít % jednotek inzulinu nyní nebo % za 15 minut (%).",
		changes_are_saved: "Změny jsou automaticky uloženy.",
		hour: "HH:",
		carb_insulin: "S:I",
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

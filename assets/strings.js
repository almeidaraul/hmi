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
	"pt_BR": {
		home: "Início",
		settings: "Opções",
		bg: "Glicemia: ",
		carbs: "Carboidratos: ",
		take_now_singular: "Você  deve tomar % unidade de insulina agora ou % em 15 minutos (%).",
		take_now_plural: "Você deve tomar % unidades de insulina agora ou % em 15 minutos (%).",
		changes_are_saved: "As mudanças são salvas automaticamente.",
		hour: "Horas: ",
		carb_insulin: "Relação insulina:carboidrato ",
		sensibility_factor: "FSI",

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

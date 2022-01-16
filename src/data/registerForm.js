const registerForm = [
	{
		icon: "fas fa-user",
		placeholder: "name",
		type: "text",
		name: "name",
	},
	{
		icon: "fas fa-user",
		placeholder: "email",
		type: "email",
		name: "email",
	},
	{
		icon: "fas fa-phone",
		placeholder: "contact no.",
		type: "tel",
		name: "contactNo",
	},
	{
		icon: "fas fa-building",
		placeholder: "college name",
		type: "text",
		name: "collegeName",
	},
	{
		placeholder: "WHICH EVENT YOU WANT PARTICIPATE?",
		type: "selection",
		name: "event",
		options: [
			"Coding",
			"Debugging",
			"Webpage",
			"Research and Project Presentation",
			"Quiz",
			"Poster",
			"Algorithm",
			"Dancing/Singing/Instruments",
			"PowerPoint Presentation",
			"Just a minute",
			"Stand-Up Comedy",
		],
	},
	{
		icon: "fas fa-graduation-cap",
		placeholder: "Stream",
		type: "text",
		name: "stream",
	},
	{
		placeholder: "year of Studing",
		type: "dropdown",
		name: "year",
		options: ["FY", "SY", "TY", "MSC 1st", "MSC 2nd"],
	},
	{
		placeholder: "Gender",
		type: "dropdown",
		name: "gender",
		options: ["Male", "Female", "Other"],
	},
];

export default registerForm;

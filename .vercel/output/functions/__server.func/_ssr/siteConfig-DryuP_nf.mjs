//#region node_modules/.nitro/vite/services/ssr/assets/siteConfig-DryuP_nf.js
var SITE_CONFIG = {
	name: "WINDOWS PLAZA",
	parentCompany: "SP Builders & Traders",
	tagline: "A Unit of SP Builders & Traders",
	headline: "Premium uPVC Windows & Doors",
	subheadline: "Elegant. Secure. Energy Efficient.",
	email: "hello@windowsplaza.in",
	whatsapp: {
		number: "918341166268",
		display: "+91 8341166268"
	},
	phones: [
		{
			display: "+91 9494918231",
			href: "tel:+919494918231"
		},
		{
			display: "+91 8341166268",
			href: "tel:+918341166268"
		},
		{
			display: "08933 298231",
			href: "tel:+918933298231"
		}
	],
	primaryPhone: {
		display: "+91 9494918231",
		href: "tel:+919494918231"
	},
	address: {
		lines: [
			"Rajula Tallavalasa",
			"Near Thirumala College",
			"Bheemunipatnam",
			"Visakhapatnam",
			"Andhra Pradesh – 531162"
		],
		full: "Rajula Tallavalasa, Near Thirumala College, Bheemunipatnam, Visakhapatnam, Andhra Pradesh – 531162",
		mapsUrl: "https://maps.google.com/?q=Rajula+Tallavalasa+Near+Thirumala+College+Bheemunipatnam+Visakhapatnam+Andhra+Pradesh+531162",
		mapsEmbedUrl: "https://www.google.com/maps?q=Rajula+Tallavalasa+Near+Thirumala+College+Bheemunipatnam+Visakhapatnam+Andhra+Pradesh+531162&output=embed"
	},
	founder: {
		name: "Botcha Sasi Kumar",
		title: "Founder, Windows Plaza",
		phone: {
			display: "+91 9494918231",
			href: "tel:+919494918231"
		}
	},
	serviceAreas: [
		"Visakhapatnam",
		"Vizianagaram",
		"Anakapalli",
		"Srikakulam",
		"Kakinada"
	],
	trustBadges: [
		"Free Site Visit",
		"Free Measurement",
		"Free Quotation"
	],
	partners: [{
		name: "BAYDEE uPVC Profiles",
		logoSrc: "/assets/partners/baydee-logo.svg",
		logoAlt: "Baydee uPVC Profiles"
	}, {
		name: "PETRA Steel Doors",
		logoSrc: "/assets/partners/petra-logo.svg",
		logoAlt: "Petra Steel Doors"
	}],
	social: {},
	seo: {
		canonicalOrigin: "",
		geo: {
			latitude: null,
			longitude: null
		},
		businessHours: null,
		googleReviewsUrl: null,
		serviceRadiusKm: null,
		warrantyInfoUrl: null,
		realProjectPhotosReady: false
	}
};
function whatsAppUrl(message = "Hi! I'd like to get a quote for uPVC windows or doors.") {
	return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
//#endregion
export { whatsAppUrl as n, SITE_CONFIG as t };

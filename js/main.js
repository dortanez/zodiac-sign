var zodiacSigns = [
	
		{
			sign: "aries",
			description: "Aries is the first sign of the zodiac. Those who are Aries are independent and courageous. They enjoy leading others and bringing excitement into the lives of others. An Aries is enthusiastic and very goal-oriented.",
			picture: "img/aries.jpg"
		},
		{
			sign: "taurus",
			description: "The second sign of the zodiac, those who are a Taurus are solid and fight for what they want. A Taurus is very easy going but can also be stubborn. A Taurus can be procrastinators but also have a good-work ethic.",
			picture: "img/taurus.jpg"
		},
		{
			sign: "gemini",
			description: "Gemini is the third sign of the zodiac. Geminis have many sides and are known for their energy. They are very talkative and are considered social butterflies. A Gemini will always take their lives in the direction they want to go.",
			picture: "img/gemini.jpg"
		},
		{
			sign: "cancer",
			description: "Cancer is the fourth sign of the zodiac. This sign is marked by inconsistency. They enjoy security but also seek adventure. A Cancer is not very predictable and always keep others guessing.",
			picture: "img/cancer.jpg"
		},
		{
			sign: "leo",
			description: "Leo is the fifth sign in the zodiac. Leos have high self esteem and are very devoted. They are also very kind and generous. A Leo is known for being hot tempered yet forgiving.",
			picture: "img/leo.jpg"
		},
		{
			sign: "virgo",
			description: "The sixth sign of the zodiac, Virgo is very mind oriented. They are constantly analyzing and thinking. They enjoy bettering themselves and those around them.",
			picture: "img/virgo.jpg"
		},
		{
			sign: "libra",
			description: "The seventh sign of the zodiac, Libras are known for their diplomatic nature. They get along well with everyone and are ambitious. They have very expensive taste and work hard to make money.",
			picture: "img/libra.jpg"
		},
		{
			sign: "scorpio",
			description: "The eight sign of the zodiac, Scorpios are very intense. They like to question everything and work hard at making sense of things. Scorpios treat others with kindness and loyalty.",
			picture: "img/scorpio.jpg"
		},
		{
			sign: "sagittarius",
			description: "The ninth sign of the zodiac, a Sagittarius has a very positive outlook on life. They have vibrant personalities and enjoy meeting new people. They can also be reckless.",
			picture: "img/sagittarius.jpg"
		},
		{
			sign: "capricorn",
			description: "The 10th sign of the zodiac, those who are Capricorns are marked by their ambitious nature. They have very active minds and always have to be in control of their lives.",
			picture: "img/capricorn.jpg"
		},
		{
			sign: "aquarius",
			description: "Aquarius is the 11th sign of the zodiac. Aquarians don't always care what others think about them. They take each opportunity they have and work towards formulating new ideas.",
			picture: "img/aquarius.jpg"
		},
		{
			sign: "pisces",
			description: "Pisces is the 12th and last sign of the zodiac. Those who are Pisces are extremely sensitive and reserved. They like to escape from reality. A Pisces is a very good listener and friend.",
			picture: "img/pisces.jpg"
		}
];


function horoscope () {

	var zodiacInput = document.getElementById("zodiacInput");

	for (var i = 0; i < zodiacSigns.length; i++) {

		if(zodiacInput.value.toLowerCase() === zodiacSigns[i].sign) {
		

		document.getElementById("signName").textContent = zodiacInput.value;
		document.getElementById("signImage").src = zodiacSigns[i].picture;
		document.getElementById("signDescription").textContent = zodiacSigns[i].description;

		return;

		}
	}
};
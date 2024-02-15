// Väderkoderna
const weatherCodes = [
    {
        "code": 0,
        "text": "Klart himmel"
    },
    {
        "code": 1,
        "text": "Huvudsakligen klart"
    },
    {
        "code": 2,
        "text": "Delvis molnigt"
    },
    {
        "code": 3,
        "text": "Mulet"
    },
    {
        "code": 45,
        "text": "Dimma och rimfrostbildning"
    },
    {
        "code": 48,
        "text": "Dimma och rimfrostbildning"
    },
    {
        "code": 51,
        "text": "Duggregn: Lätt intensitet"
    },
    {
        "code": 53,
        "text": "Duggregn: Måttlig intensitet"
    },
    {
        "code": 55,
        "text": "Duggregn: Tät intensitet"
    },
    {
        "code": 56,
        "text": "Frysande duggregn: Lätt intensitet"
    },
    {
        "code": 57,
        "text": "Frysande duggregn: Tät intensitet"
    },
    {
        "code": 61,
        "text": "Regn: Lätt intensitet"
    },
    {
        "code": 63,
        "text": "Regn: Måttlig intensitet"
    },
    {
        "code": 65,
        "text": "Regn: Kraftig intensitet"
    },
    {
        "code": 66,
        "text": "Frysande regn: Lätt intensitet"
    },
    {
        "code": 67,
        "text": "Frysande regn: Kraftig intensitet"
    },
    {
        "code": 71,
        "text": "Snöfall: Lätt intensitet"
    },
    {
        "code": 73,
        "text": "Snöfall: Måttlig intensitet"
    },
    {
        "code": 75,
        "text": "Snöfall: Kraftig intensitet"
    },
    {
        "code": 77,
        "text": "Snökrystaller"
    },
    {
        "code": 80,
        "text": "Regnskurar: Lätta"
    },
    {
        "code": 81,
        "text": "Regnskurar: Måttliga"
    },
    {
        "code": 82,
        "text": "Regnskurar: Kraftiga"
    },
    {
        "code": 85,
        "text": "Snöskurar: Lätta"
    },
    {
        "code": 86,
        "text": "Snöskurar: Kraftiga"
    },
    {
        "code": 95,
        "text": "Åskväder: Lätt intensitet"
    },
    {
        "code": 96,
        "text": "Åskväder med lätt hagel"
    },
    {
        "code": 99,
        "text": "Åskväder med kraftigt hagel"
    }
]
export default weatherCodes
/*
0	Clear sky
1, 2, 3	Mainly clear, partly cloudy, and overcast
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
*/
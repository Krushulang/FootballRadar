var laliga= ["Athletic Club","Ateletico de Madrid", "CA Osasuna", "Cadiz CF", "Deportivo Alaves", "FC Barcelona", "Getafe CF","Girona FC", "Granada CF", "Rayo Vallecano", "RC Celta","RCD Mallorca", "Real Betis", "Real Madrid", "Real Sociedad", "Sevilla FC", "UD Almeria", "UD Las Palmas"," Valencia CF", "Villarreal CF"]

var EnglishPremireLeage = [
    "Manchester City",
    "Arsenal",
    "Manchester United",
    "Newcastle United",
    "Liverpool",
    "Brighton & Hove Albion",
    "Aston Villa",
    "Tottenham Hotspur",
    "Brentford",
    "Fulham",
    "Crystal Palace",
    "Chelsea",
    "Wolverhampton Wanderers",
    "West Ham United",
    "Bournemouth",
    "Nottingham Forest",
    "Everton",
    "Luton Town",
    "AFC Bournemouth",
    "Sheffield United"
];

var ligue1Clubs = [
    "AS Monaco",
    "OGC Nice",
    "Paris Saint-Germain (PSG)",
    "Brest",
    "Reims",
    "Marseille",
    "LOSC (Lille)",
    "Rennes",
    "Nantes",
    "Toulouse",
    "Strasbourg",
    "Montpellier",
    "Le Havre",
    "Lens",
    "Metz",
    "Lorient",
    "Lyon",
    "Clermont Foot"
];

var bundesligaClubs = [
    "Bayer 04 Leverkusen",
    "VfB Stuttgart",
    "FC Bayern München",
    "Borussia Dortmund",
    "TSG Hoffenheim",
    "RB Leipzig",
    "VfL Wolfsburg",
    "Eintracht Frankfurt",
    "Sport-Club Freiburg",
    "1. FC Heidenheim 1846",
    "SV Darmstadt 98",
    "Borussia Mönchengladbach",
    "1. FC Union Berlin",
    "SV Werder Bremen",
    "FC Augsburg",
    "VfL Bochum 1848",
    "1. FSV Mainz 05",
    "1. FC Köln"
];

var serieAClubs = [
    "AC Milan",
    "Internazionale Milan",
    "Juventus",
    "Fiorentina",
    "Napoli",
    "Atalanta",
    "Monza",
    "Frosinone",
    "Lecce",
    "AS Roma",
    "Bologna",
    "Sassuolo",
    "Lazio",
    "Torino",
    "Genoa",
    "Verona",
    "Udinese",
    "Empoli",
    "Salernitana",
    "Cagliari"
];

var mlsClubs = [
    "Atlanta United",
    "Austin FC",
    "Charlotte FC",
    "Chicago Fire FC",
    "FC Cincinnati",
    "Colorado Rapids",
    "Columbus Crew",
    "D.C. United",
    "FC Dallas",
    "Houston Dynamo FC",
    "Sporting Kansas City",
    "LA Galaxy",
    "Los Angeles Football Club",
    "Inter Miami CF",
    "Minnesota United FC",
    "CF Montréal",
    "Nashville SC",
    "New England Revolution",
    "New York Red Bulls",
    "New York City FC",
    "Orlando City SC",
    "Philadelphia Union",
    "Portland Timbers",
    "Real Salt Lake",
    "San Jose Earthquakes",
    "Seattle Sounders FC",
    "St. Louis City SC",
    "Toronto FC",
    "Vancouver Whitecaps FC"
];

function teamUpdate(){
    switch(league.value) {
        case 'premierleague' : 
            leagueTeams = EnglishPremireLeague;
            break;
        case 'laliga' : 
            leagueTeams = laliga;
            break;
        case 'seriea' : 
            leagueTeams = serieAClubs;
            break;
        case 'league1' : 
            leagueTeams = ligue1Clubs;
            break;
        case 'bundesliga' : 
            leagueTeams = bundesligaClubs;
            break;
        case 'mls' : 
            leagueTeams = mlsClubs;
            break;
    };
    teamOptions = "";
    for(let i = 0; i < leagueTeams.length; i++){
        teamOptions += "<option value=" + leagueTeams[i] + ">" + leagueTeams[i] + "</option>"
    }
    team1.innerHTML = teamOptions;
    team2.innerHTML = teamOptions;
};


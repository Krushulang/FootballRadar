var league = document.getElementById("league");
var team1 = document.getElementById("team1")
var team2 = document.getElementById("team2")
var leagueTeams = ["default"];


function teamUpdate(){
    switch(league.value) {
        case 'premierleague' : 
            leagueTeams = ["dreamte", "lamete"];
            break;
        case 'laliga' : 
            leagueTeams = ["drea", "lamet"];
            break;
        case 'seriea' : 
            leagueTeams = ["drmteam", "meteam"];
            break;
        case 'league1' : 
            leagueTeams = ["dreaeam", "lateam"];
            break;
        case 'bundesliga' : 
            leagueTeams = ["dmteam", "lameam"];
            break;
        case 'mls' : 
            leagueTeams = ["dreamteam", "lameteam"];
            break;
    };
    teamOptions = "";
    for(let i = 0; i < leagueTeams.length; i++){
        teamOptions += "<option value=" + leagueTeams[i] + ">" + leagueTeams[i] + "</option>"
    }
    team1.innerHTML = teamOptions;
    team2.innerHTML = teamOptions;
};


export interface League {
    conference: Conference;
    division: Division;
    league: LeagueIdentifier;
    standingsType: string;
    teamRecords: Standings[];
}

export interface Conference {
    id: number;
    name: string;
    link: string;
}

export interface Division {
    id: number;
    name: string;
    nameShort: string;
    link: string;
    abbreviation: string;
}

export interface LeagueIdentifier {
    id: number;
    name: string;
    link: string;
}

export interface Standings {
    conferenceRank: string;
    divisionRank: string;
    gamesPlayed: number;
    goalsAgainst: number;
    goalsScored: number;
    lastUpdated: string; // unused
    leagueRank: string;
    leagueRecord: StandingsRecord;
    points: number;
    streak: Streak;
    team: Team;
    wildCardRank: string;
}

interface Team {
    id: number;
    name: string;
    link: string;
}

interface StandingsRecord {
    wins: number;
    losses: number;
    ot: number;
}

interface Streak {
    streakType: string;
    streakNumber: number;
    streakCode: string;
}

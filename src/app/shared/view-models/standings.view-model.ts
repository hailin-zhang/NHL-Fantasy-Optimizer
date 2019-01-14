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
    team: StandingsTeam;
    wildCardRank: string;
}

export interface StandingsTeam {
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

export interface NHLAPITeam {
    abbreviation: number;
    active: boolean;
    conference: Conference;
    division: Division;
    firstYearOfPlay: string;
    franchise: Franchise;
    franchiseId: number;
    link: string;
    locationName: string;
    name: string;
    officialSiteUrl: string;
    shortName: string;
    teamName: string;
    venue: Venue;
}

interface Franchise {
    franchiseId: number;
    teamName: string;
    link: string;
}

interface Venue {
    city: string;
    link: string;
    name: string;
    timeZone: TimeZone;
}

interface TimeZone {
    id: string;
    offset: number;
    tz: string;
}

export interface Standings {
    conferenceRank: string;
    divisionRank: string;
    gamesPlayed: number;
    goalsAgainst: number;
    goalsScored: number;
    leagueRank: string;
    leagueRecord: StandingsRecord;
    points: number;
    streak: Streak;
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

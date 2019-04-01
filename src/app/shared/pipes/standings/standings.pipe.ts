import { Pipe, PipeTransform } from '@angular/core';
import {
    Conference,
    Division,
    League,
    LeagueIdentifier,
    NHLAPITeam,
    Player,
    Standings,
} from '@VM/standings.view-model';

@Pipe({
    name: 'conference'
})
export class ConferencePipe implements PipeTransform {
    transform(league: League): Conference {
        return league.conference;
    }
}

@Pipe({
    name: 'conferenceID'
})
export class ConferenceIDPipe implements PipeTransform {
    transform(conference: Conference): number {
        return conference.id;
    }
}

@Pipe({
    name: 'conferenceName'
})
export class ConferenceNamePipe implements PipeTransform {
    transform(conference: Conference): string {
        return conference.name;
    }
}

@Pipe({
    name: 'division'
})
export class DivisionPipe implements PipeTransform {
    transform(league: League): Division {
        return league.division;
    }
}

@Pipe({
    name: 'divisionID'
})
export class DivisionIDPipe implements PipeTransform {
    transform(division: Division): number {
        return division.id;
    }
}

@Pipe({
    name: 'divisionName'
})
export class DivisionNamePipe implements PipeTransform {
    transform(division: Division): string {
        return division.name;
    }
}

@Pipe({
    name: 'divisionNameShort'
})
export class DivisionNameShortPipe implements PipeTransform {
    transform(division: Division): string {
        return division.nameShort;
    }
}

@Pipe({
    name: 'divisionAbbreviation'
})
export class DivisionAbbreviationPipe implements PipeTransform {
    transform(division: Division): string {
        return division.abbreviation;
    }
}

@Pipe({
    name: 'leagueID'
})
export class LeagueIdentifierPipe implements PipeTransform {
    transform(league: League): LeagueIdentifier {
        return league.league;
    }
}

@Pipe({
    name: 'leagueIDID'
})
export class LeagueIdentifierIDPipe implements PipeTransform {
    transform(league: LeagueIdentifier): number {
        return league.id;
    }
}

@Pipe({
    name: 'leagueIDName'
})
export class LeagueIdentifierNamePipe implements PipeTransform {
    transform(league: LeagueIdentifier): string {
        return league.name;
    }
}

@Pipe({
    name: 'standings'
})
export class StandingsPipe implements PipeTransform {
    transform(league: League): Standings[] {
        return league.teamRecords;
    }
}

@Pipe({
  name: 'conferenceRank'
})
export class ConferenceRankPipe implements PipeTransform {
  transform(team: Standings): string {
    return team.conferenceRank;
  }
}

@Pipe({
    name: 'divisionRank'
})
export class DivisionRankPipe implements PipeTransform {
    transform(team: Standings): string {
        return team.divisionRank;
    }
}

@Pipe({
    name: 'goalsAgainst'
})
export class GoalsAgainstPipe implements PipeTransform {
    transform(team: Standings): number {
        return team.goalsAgainst;
    }
}

@Pipe({
    name: 'leagueRank'
})
export class LeagueRankPipe implements PipeTransform {
    transform(team: Standings): string {
        return team.leagueRank;
    }
}

@Pipe({
    name: 'points'
})
export class PointsPipe implements PipeTransform {
    transform(team: Standings): number {
        return team.points;
    }
}

@Pipe({
    name: 'leagueRecordWins'
})
export class LeagueRecordWinsPipe implements PipeTransform {
    transform(team: Standings): number {
        return team.leagueRecord.wins;
    }
}

@Pipe({
    name: 'leagueRecordLosses'
})
export class LeagueRecordLossesPipe implements PipeTransform {
    transform(team: Standings): number {
        return team.leagueRecord.losses;
    }
}

@Pipe({
    name: 'leagueRecordOT'
})
export class LeagueRecordOTPipe implements PipeTransform {
    transform(team: Standings): number {
        return team.leagueRecord.ot;
    }
}

@Pipe({
    name: 'streakType'
})
export class StreakTypePipe implements PipeTransform {
    transform(team: Standings): string {
        return team.streak.streakType;
    }
}

@Pipe({
    name: 'streakNumber'
})
export class StreakNumberPipe implements PipeTransform {
    transform(team: Standings): number {
        return team.streak.streakNumber;
    }
}

@Pipe({
    name: 'streakCode'
})
export class StreakCodePipe implements PipeTransform {
    transform(team: Standings): string {
        return team.streak.streakCode;
    }
}

@Pipe({
    name: 'teamName'
})
export class TeamNamePipe implements PipeTransform {
    transform(team: NHLAPITeam): string {
        return team.name;
    }
}

@Pipe({
    name: 'teamDivisionName'
})
export class TeamDivisionNamePipe implements PipeTransform {
    transform(team: NHLAPITeam): string {
        return team.name;
    }
}

@Pipe({
    name: 'playerName'
})
export class PlayerNamePipe implements PipeTransform {
    transform(player: Player): string {
        return player.person.fullName;
    }
}

@Pipe({
    name: 'playerPosition'
})
export class PlayerPositionPipe implements PipeTransform {
    transform(player: Player): string {
        return player.position.name;
    }
}

@Pipe({
    name: 'playerID'
})
export class PlayerIDPipe implements PipeTransform {
    transform(player: Player): number {
        return player.person.id;
    }
}


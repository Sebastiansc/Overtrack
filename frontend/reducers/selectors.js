// Shapes match to fit database schema.
// Using snake case convention for easier posting to Rails.
export const shapeMatch = (match) => {
  let shapedMatch = {
    region: match.region,
    match_type: match.matchType,
    match_id: match.matchId,
    match_creation: match.matchCreation,
    match_duration: match.matchDuration,
    participants: shapeParticipants(match)
  };
};

const shapeParticipants = match => {
  let participants = [];
  const identities = shapeIdentities(match);
  match.participants.forEach(participant => {
    const shapedParticipant = {
      champion_id: participant.championId,
      team_id: participant.teamId,
      spell1_id: participant.spell1Id,
      spell2_id: participant.spell2Id,
      win: participant.win,
      stats: participant.stats,
      summoner: identities[participant.participantId]
    };
    participants.push(shapedParticipant);
  });
  return participants;
};

// Participant identities are passed in an array.
// Changes it to a hash where each key is the participant id
const shapeIdentities = match => {
  let hashIdentities = {};
  match.participantIdentities.forEach(identity => {
    hashIdentities[identity.participantId] = identity.player;
  });
  return hashIdentities;
};

// region -> string,
// match_type -> string,
// match_id -> integer
// match_creation -> string,
// participants -> hash
//
//
// participants: {
//     stats: {},
//     spell2Id: integer,
//     spell1Id: integer,
//     championId: integer,
//     teamId: integer,
//     win: boolean,
// }

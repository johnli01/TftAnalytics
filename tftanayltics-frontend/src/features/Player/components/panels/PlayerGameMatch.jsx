import React from "react";
import PlayerGameMatchInfo from "../panels/PlayerGameMatchInfo";
import PlayerMatchUnitsSection from "../panels/PlayerMatchUnitsSection";

const PlayerGameMatch = ({ match }) => (
  <div className="flex flex-col w-full">
    {/* Main content */}
    <div className="flex flex-row w-full items-end gap-4">
      <PlayerGameMatchInfo match={match} />
      <PlayerMatchUnitsSection match={match} />
    </div>
  </div>
);

export default PlayerGameMatch;

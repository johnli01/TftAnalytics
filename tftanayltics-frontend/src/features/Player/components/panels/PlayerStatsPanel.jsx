// features/Player/components/panels/PlayerStatsPanel.jsx
import React from "react";
import PlayerStatsCard from "../cards/PlayerStatsCard";

const PlayerStatsPanel = ({ stats }) => {

  return (
    <section className="mb-6 pt-5">
      <PlayerStatsCard
        totalGames={Number(stats.wins) + Number(stats.losses)}
        wins={stats.wins}
        top4Rate={stats.winRate}
        avgPlacement={"4.2"}
      />
    </section>
  );
};


export default PlayerStatsPanel;

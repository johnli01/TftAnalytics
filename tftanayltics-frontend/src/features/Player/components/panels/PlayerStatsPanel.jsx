// features/Player/components/panels/PlayerStatsPanel.jsx
import React from "react";
import PlayerStatsCard from "../shared/PlayerStatsCard";

function getWinPercentage(matches) {
  if (!Array.isArray(matches) || matches.length === 0) return 0;
  const wins = matches.reduce((count, match) => {
    return match.placement === 1 ? count + 1 : count;
  }, 0);
  return ((wins / matches.length) * 100).toFixed(2); // returns percentage as a string with 2 decimals
}

const PlayerStatsPanel = ({ stats, matches }) => {

  return (
    <section className="mb-6 pt-5">
      <PlayerStatsCard
        totalGames={Number(stats.wins) + Number(stats.losses)}
        wins={getWinPercentage(matches)}
        top4Rate={stats.winRate}
        avgPlacement={"4.2"}
      />
    </section>
  );
};


export default PlayerStatsPanel;

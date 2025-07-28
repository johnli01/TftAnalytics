// features/Player/components/panels/PlayerStatsPanel.jsx
import React from "react";
import usePlayerStats from "../../hooks/usePlayerStats";
import PlayerStatsCard from "../cards/PlayerStatsCard";

const PlayerStatsPanel = ({ region, name, tag }) => {
  const { stats, loading, error } = usePlayerStats(region, name, tag);

  if (loading) return <p>Loading player stats...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Statistics</h2>
      <PlayerStatsCard
        totalGames={stats.totalGames}
        wins={stats.wins}
        top4Rate={stats.top4}
        avgPlacement={stats.avgPlacement}
      />
    </section>
  );
};

export default PlayerStatsPanel;

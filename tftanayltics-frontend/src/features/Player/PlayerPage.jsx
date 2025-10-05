// src/pages/PlayerPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PlayerStatsPanel from "./components/panels/PlayerStatsPanel";
import PlayerGraphPanel from "./components/panels/PlayerGraphPanel";
import PlayerMatchHistoryPanel from "./components/panels/PlayerMatchHistoryPanel";
import PlayerCard from "./components/cards/PlayerCard";
import PlayerLast20PlacementCard from "./components/cards/PlayerLast20PlacementCard";
import usePlayerInfo from "./hooks/usePlayerInfo";

const PlayerPage = () => {
  const { region, name, tag } = useParams();
  const { playerInfo, loading, error } = usePlayerInfo(region, name, tag);

  useEffect(() => {
    document.title = `${name}#${tag} - Player Stats`;
  }, [name, tag]);

  if (loading) return <p className="text-white">Loading player info...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!playerInfo) return <p className="text-white">No player data found.</p>;

  return (
    <div className="flex flex-col min-h-screen bg-[#23263A]">
      {/* Search Bar */}
      <header className="flex justify-center items-center h-16 border-b border-gray-700">
        <h1 className="text-2xl text-white font-semibold">Player Stats</h1>
      </header>

      {/* Main Content */}
      <div className="flex w-full pb-8 lg:max-w-[1200px] mx-auto px-6 py-8 gap-6">

        {/* Left Panel */}
        <div className="flex flex-col items-center w-1/4 min-w-[225px] max-h-[820px] space-y-6 bg-[#1E2030] p-6 rounded-lg sticky top-6 self-start">
          <div className="w-full rounded-lg p-4 flex flex-col items-center">
            <PlayerCard
              name={playerInfo.name}
              tag={playerInfo.tag}
              profilePicUrl={
                playerInfo.profilePicUrl || "/default-avatar.png"
              }
            />
          </div>

          <div className="w-full rounded-lg p-4">
            <PlayerStatsPanel stats={playerInfo.stats} matches={playerInfo.matches} />
          </div>

          <div className="w-full rounded-lg p-4">
            <PlayerLast20PlacementCard matches={playerInfo.matches} />
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Graph Section */}
          <PlayerGraphPanel matches={playerInfo.matches} />
          <PlayerMatchHistoryPanel matches={playerInfo.matches} />
        </div>
        
      </div>
    </div>
  );
};

export default PlayerPage;

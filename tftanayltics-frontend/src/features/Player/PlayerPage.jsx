// src/pages/PlayerPage.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import PlayerInfoPanel from "./components/panels/PlayerInfoPanel";
import usePlayerInfo from "./hooks/usePlayerInfo";

const PlayerPage = () => {
  const { region, name, tag } = useParams();
  const { playerInfo, loading, error } = usePlayerInfo(region, name, tag);


  useEffect(() => {
    document.title = `${name}#${tag} - Player Stats`;
  });

  if (loading) return <p>Loading player info...</p>;
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <div className="flex flex-col justify-between min-h-screen border border-red-600">
      {/* Search Bar */}
      <div className="flex justify-center items-center h-16 border border-red-600">
        <h1 className="text-2xl text-white">Player Stats</h1>  
      </div>

      <div className="flex w-full pb-8 lg:max-w-[calc(100vw-30px)] border border-blue-600">
        {/* Player Card on Left */}
        <div className="flex flex-row gap-6 px-12 py-8 min-h-screen border border-red-600">
          <PlayerInfoPanel playerInfo={playerInfo} />
        </div>
        {/* Player Graph on Right */}
        <div className="flex-1 bg-[#23263A] p-6 border border-green-600">
          <p className="text-white">Additional player stats and information will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;

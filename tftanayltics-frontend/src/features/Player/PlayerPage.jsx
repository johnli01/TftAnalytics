// src/pages/PlayerPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

import PlayerInfoPanel from "./components/panels/PlayerInfoPanel";
import PlayerStatsPanel from "./components/panels/PlayerStatsPanel";

const PlayerPage = () => {
  const { region, name, tag } = useParams();

  return (
    <div className="flex flex-row gap-6 px-12 py-8 min-h-screen">
      <PlayerInfoPanel region={region} name={name} tag={tag} />
      <PlayerStatsPanel region={region} name={name} tag={tag} />
    </div>
  );
};

export default PlayerPage;

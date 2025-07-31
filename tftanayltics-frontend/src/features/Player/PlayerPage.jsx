// src/pages/PlayerPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

import PlayerInfoPanel from "./components/panels/PlayerInfoPanel";

const PlayerPage = () => {
  const { region, name, tag } = useParams();

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex w-full pb-8 lg:max-w-[calc(100vw-30px)]">
        <div className="flex flex-row gap-6 px-12 py-8 min-h-screen">
          <PlayerInfoPanel region={region} name={name} tag={tag} />
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;

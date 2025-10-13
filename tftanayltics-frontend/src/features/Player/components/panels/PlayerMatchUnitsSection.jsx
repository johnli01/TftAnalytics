import React from "react";
import UnitEntity from "../entities/UnitEntity";

const PlayerMatchUnitsSection = ({ match }) => (
  <div className="flex gap-2 flex-1">
    {/* Trait Information can be added here */}
    {match.units?.map((unit, idx) => (
      <UnitEntity
        key={idx}
        characterId={unit.characterId}
        src={''} // TODO: add CDN path
        items={unit.items}
      />
    ))}
  </div>
);

export default PlayerMatchUnitsSection;

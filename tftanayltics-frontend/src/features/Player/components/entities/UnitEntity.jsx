import React from "react";

const handleImgError = (e) => {
  e.target.src = "/default-unit.png";
};

const UnitEntity = ({ characterId, src, items }) => (
  <div className="relative flex flex-col items-center">
    <div className="w-12 h-12 rounded-[6px] bg-[#1E2030] border border-gray-700 overflow-hidden">
      <img
        src={src || ""}
        alt={characterId}
        onError={handleImgError}
        className="w-full h-full object-cover"
      />
    </div>
    {items?.length > 0 && (
      <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 flex gap-[0px] bg">
        {items.map((item, idx) => (
          <img
            key={idx}
            src={""} // TODO: add item CDN
            alt={"1"}
            onError={handleImgError}
            className="w-4 h-4 rounded-sm border border-gray-700 object-cover shadow-md"
            style={{ transform: "translateY(50%)" }}
          />
        ))}
      </div>
    )}
  </div>
);

export default UnitEntity;

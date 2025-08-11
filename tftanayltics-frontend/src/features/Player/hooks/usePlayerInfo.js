import { useState, useEffect } from "react";

export function usePlayerInfo(region, name, tag) {
  const [playerInfo, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!region || !name || !tag) return;

    const fetchPlayerData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `http://localhost:5000/api/player/${region}/${name}/${tag}`
        );

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        setPlayerData(data);
      } catch (err) {
        console.error("Failed to fetch player data:", err);
        setError("Failed to load player data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerData();
  }, [region, name, tag]);

  return { playerInfo, loading, error };
};

export default usePlayerInfo;

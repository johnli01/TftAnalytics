import { useState, useEffect } from "react";

export function usePlayerStats(region, name, tag) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!region || !name || !tag) return;

    setLoading(true);
    setError(null);

    // Simulate backend response delay
    const timer = setTimeout(() => {
      try {
        // This is the mock backend response data
        const mockResponse = {
          top4: 60.0,
          totalGames: 100,
          wins: 10,
          avgPlacement: 3.7,
        };

        setStats(mockResponse);
      } catch (err) {
        setError("Failed to load mock stats");
      } finally {
        setLoading(false);
      }
    }, 1000);

    // Cleanup timeout if component unmounts early
    return () => clearTimeout(timer);
  }, [region, name, tag]);

  return { stats, loading, error };
}

export default usePlayerStats;
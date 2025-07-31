import { useState, useEffect } from "react";

export function usePlayerLast20Placements(region, name, tag) {
    const [playerLast20Placements, setPlayerLast20Placements] = useState([1,2,3,4,5,6,7,8,7,8,5,4,5,3,2,1,5,6,7,8]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (!region || !name || !tag) return;
    
        const fetchLast20Placements = async () => {
        try {
            setError(null);
    
            const response = await fetch(
            `http://localhost:5000/api/player/matches/${region}/${name}/${tag}/games=20`
            );
    
            if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
            }
    
            const data = await response.json();
            setPlayerLast20Placements(data.placements);
        } catch (err) {
            console.error("Failed to fetch last 20 placements:", err);
            setError("Failed to load last 20 placements.");
        }
        };
    
        fetchLast20Placements();
    }, [region, name, tag]);
    
    return { playerLast20Placements, loading, error };
}

export default usePlayerLast20Placements;
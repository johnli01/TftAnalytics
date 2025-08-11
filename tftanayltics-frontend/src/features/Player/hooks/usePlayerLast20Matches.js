import { useState, useEffect } from "react";

export function usePlayerLast20Matches(matches) {
    const playerLast20Matches = [];

    if (Array.isArray(matches)) {
        for (let i = 0; i < Math.min(20, matches.length); i++) {
            playerLast20Matches.push(matches[i]);
        }
    }

    return { playerLast20Matches };
}

export default usePlayerLast20Matches;
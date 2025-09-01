from shared.riot.TftApi import TftApi
import os

from dotenv import load_dotenv

# Initialize TftApi instance (you may want to refactor this for dependency injection)
load_dotenv(dotenv_path="keys.env")
tft_api = TftApi(os.getenv("API_KEY"))

def get_profile_block(player_name, tag, puuid, region):
    profile_info = tft_api.get_summoner_profile_pic(puuid, region)

    res = {
        "name": player_name,
        "tag": tag,
        "profileIconUrl": profile_info["profileIconId"],
        "summonerLevel": profile_info["summonerLevel"]
    }
    return res

def get_stats_block(puuid, region):
    stats = tft_api.get_summoner_ranked_stats(puuid, region)[0]

    res = {
        "tier": stats["tier"],
        "rank": stats["rank"],
        "leaguePoints": stats["leaguePoints"],
        "wins": stats["wins"],
        "losses": stats["losses"],
        "winRate": round((int(stats["wins"]) / (int(stats["wins"]) + int(stats["losses"]))) * 100, 1) if (int(stats["wins"]) + int(stats["losses"])) > 0 else 0
    }
    return res

def get_matches_block(puuid, region):
    match_ids = tft_api.get_match_ids(puuid, region, start=0, count=20)
    res = []    
    for match_id in match_ids:
        match_data = tft_api.get_match_details(match_id)

        # Find the participant info that matches our player by PUUID
        participant = next(
            (p for p in match_data.get("info", {}).get("participants", []) if p["puuid"] == puuid),
            None
        )
        if not participant:
            continue

        temp = {
            "matchId": match_id,
            "placement": participant.get("placement"),
            "gameDatetime": match_data.get("info", {}).get("game_datetime"),
            "gameLength": match_data.get("info", {}).get("game_length"),
            "units": [
                {
                    "characterId": u.get("character_id"),
                    "tier": u.get("tier", 1),
                    "rarity": u.get("rarity", 1),
                    "items": u.get("itemNames", [])
                } for u in participant.get("units", [])
            ]
        }

        res.append(temp)


    return res

def get_player_profile(region, player_name):
    """
    Fetches the player profile, recent matches, and aggregated stats.
    """
    # Here you would typically call your service layer to get the data
    # For example:
    # return player_service.get_player_profile(region, player_name)
    
    # Placeholder for actual implementation
    return {
        "region": region,
        "player_name": player_name,
        "profile": {},
        "recent_matches": [],
        "aggregated_stats": {}
    }
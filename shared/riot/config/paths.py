PATHS = {
    "tft": {
        "summoner": {
            "get_summoner_by_riot_id": "riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}",
            "get_summoner_by_puid": "riot/account/v1/accounts/by-puuid/{puuid}/",
            "get_summoner_profile_pic": "tft/summoner/v1/summoners/by-puuid/{puuid}/",
            "checking_summoner_in_game": "lol/spectator/tft/v5/active-games/by-puuid/{puuid}/",
            "get_summoner_ranked_stats": "tft/league/v1/by-puuid/{puuid}",
        },
        "matches": {
            "get_match_ids": "tft/match/v1/matches/by-puuid/{puuid}/ids",
            "get_match_details": "tft/match/v1/matches/{matchId}",
        }
    }
}

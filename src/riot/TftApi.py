import logging

from .matches.MatchesApi import MatchesApi
from .summoner.SummonerApi import SummonerApi

class TftApi:
    def __init__(
            self, 
            api_key: str=None
            ):
        if not api_key:
            raise ValueError("API key must be provided")

        self.api_key = api_key
        self.matches = MatchesApi(api_key)
        self.summoner = SummonerApi(api_key)

    def get_summoner_puuid_by_riot_id(self, name: str, tagline: str, region: str):
        return self.summoner.get_summoner_puuid_by_riot_id(name, tagline, region)
    
    def get_summoner_by_puuid(self, puuid: str, region: str="na1"):
        return self.summoner.get_summoner_by_puuid(puuid, region)

    def get_summoner_profile_pic(self, puuid: str, region: str="na1"):
        return self.summoner.get_summoner_profile_pic(puuid, region)
    
    def check_summoner_ingame(self, puuid: str, region: str="na1"):
        return self.summoner.check_summoner_ingame(puuid, region)
    
    def get_summoner_ranked_stats(self, puuid: str, region: str="na1"):
        return self.summoner.get_summoner_ranked_stats(puuid, region)
    
    def get_match_ids(self, puuid: str, region: str="na1", start=0, endTime="", startTime="", count=20):
        return self.matches.get_match_ids(puuid, region, start, endTime, startTime, count)
    
    def get_match_details(self, match_id: str):
        return self.matches.get_match_details(match_id)
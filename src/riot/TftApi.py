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

    def get_summoner_puid(self, name: str, tagline: str, region: str):
        return self.summoner.get_summoner_puid_by_riot_id(name, tagline, region)

    def get_summoner_profile_pic(self, puid: str, region: str="na1"):
        return self.summoner.get_summoner_profile_pic(puid, region)
    
    def check_summoner_ingame(self, puuid: str, gameid, region: str="na1"):
        return self.summoner.check_summoner_ingame(puuid, gameid, region)
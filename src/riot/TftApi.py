import logging

from riot import MatchesApi, SummonerApi

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

    def get_summoner(self, name: str, tagline: str, region: str):
        pass

    def get_match(self, match_id: str):
        pass
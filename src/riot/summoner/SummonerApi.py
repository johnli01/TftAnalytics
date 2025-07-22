import requests
from urllib.parse import urljoin
import os
from src.riot.config.region_hosts import HOSTS
from src.riot.config.paths import PATHS

class SummonerApi:
    def __init__(self, api_key):
        self.api_key = api_key
        
    def get_summoner_puid_by_riot_id(self, summoner_name, tag, region="na1"):
        host = HOSTS['riot'][region]
        endpoint_path = PATHS['tft']['summoner']['getsummonerbyriotid']
        path = f"{endpoint_path}/{summoner_name}/{tag}"
        params = {"api_key": self.api_key}

        # Construct the full URL
        url = urljoin(host, path)
        print(url)
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else response.text

    def get_summoner_profile_pic(self, puuid, region="na1"):
        host = HOSTS['tft'][region]
        endpoint_path = PATHS['tft']['summoner']['getsummonerprofilepic']
        path = f"{endpoint_path}/{puuid}"
        params = {"api_key": self.api_key}

        # Construct the full URL
        url = urljoin(host, path)
        print(url)
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else response.text
    
    def check_summoner_ingame(self, puuid, gameid, region="na1"):
        pass
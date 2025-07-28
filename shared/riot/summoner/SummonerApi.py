import requests
from urllib.parse import urljoin
from shared.riot.utils.helper import populate_path
from shared.riot.config.region_hosts import HOSTS
from shared.riot.config.paths import PATHS

class SummonerApi:
    def __init__(self, api_key):
        self.api_key = api_key
        
    def get_summoner_puuid_by_riot_id(self, summoner_name, tag, region):
        host = HOSTS['riot'][region]
        path = PATHS['tft']['summoner']['get_summoner_by_riot_id']
        url = populate_path(host,path, summoner_name=summoner_name, tag=tag)
        params = {"api_key": self.api_key}

        print(url)
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else response.text
    
    def get_summoner_by_puuid(self, puuid, region):
        host = HOSTS['riot'][region]
        path = PATHS['tft']['summoner']['get_summoner_by_puuid']
        url = populate_path(host, path, puuid=puuid)
        params = {"api_key": self.api_key}

        print(url)
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else response.text

    def get_summoner_profile_pic(self, puuid, region):
        host = HOSTS['tft'][region]
        path = PATHS['tft']['summoner']['get_summoner_profile_pic']
        url = populate_path(host, path, puuid=puuid)
        params = {"api_key": self.api_key}

        print(url)
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else response.text
    
    def check_summoner_ingame(self, puuid, region):
        host = HOSTS['tft'][region]
        path = PATHS['tft']['summoner']['checking_summoner_in_game']
        url = populate_path(host, path, puuid=puuid)
        params = {"api_key": self.api_key}

        print(url)
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else response.text
    
    def get_summoner_ranked_stats(self, puuid, region):
        host = HOSTS['tft'][region]
        path = PATHS['tft']['summoner']['get_summoner_ranked_stats']
        url = populate_path(host, path, puuid=puuid)
        params = {"api_key": self.api_key}

        print(url)
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else response.text
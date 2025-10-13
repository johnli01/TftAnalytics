import requests
from shared.riot.utils.helper import populate_path
from shared.riot.config.region_hosts import HOSTS
from shared.riot.config.paths import PATHS

class MatchesApi:
    def __init__(self, api_key):
        self.api_key = api_key

    def get_match_ids(self, puuid, region, start, endTime, startTime, count):
        host = HOSTS['riot'][region]
        path = PATHS['tft']['matches']['get_match_ids']
        url = populate_path(host, path, puuid=puuid)
        params = {"api_key": self.api_key,
                  "start": start,
                  "endTime": endTime,
                  "startTime": startTime,
                  "count": count
                  }

        print(url)
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else response.text

    
    def get_match_details(self, match_id):
        host = HOSTS['riot']['na1']
        path = PATHS['tft']['matches']['get_match_details']
        url = populate_path(host, path, matchId=match_id)
        params = {"api_key": self.api_key}

        print("get_match_details: ", url)
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else response.text
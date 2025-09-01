from flask import Blueprint, jsonify, request
from backend.services.player_services import get_profile_block, get_stats_block, get_matches_block
from shared.riot.TftApi import TftApi

from dotenv import load_dotenv
import os

load_dotenv(dotenv_path="keys.env")
tft_api = TftApi(os.getenv("API_KEY"))

player_bp = Blueprint("player", __name__)

@player_bp.route("/<region>/<player_name>/<tag>", methods=["GET"])
def get_player(region, player_name, tag):
    print("Fetching player profile for:", player_name, "with tag:", tag, "in region:", region)
    try:
        # 1. Get summoner info by Riot ID (name + tag)
        summoner_info = tft_api.get_summoner_puuid_by_riot_id(player_name, tag, region)
        if isinstance(summoner_info, str):
            return jsonify({"error": summoner_info}), 400

        puuid = summoner_info.get("puuid")
        if not puuid:
            return jsonify({"error": "PUUID not found"}), 404

        response = {
            **get_profile_block(player_name, tag, puuid, region),
            "stats": get_stats_block(puuid, region),
            "matches": get_matches_block(puuid, region)
        }

        print("Response:", response)

        return jsonify(response)
    except Exception as e:
        print("Error fetching player profile:", str(e))
        return jsonify({"error": str(e)}), 500

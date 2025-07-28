from flask import Blueprint, jsonify, request, abort
from backend.services.player_services import get_player_profile

player_bp = Blueprint("player", __name__)

@player_bp.route("/<region>/<player_name>/<tag>", methods=["GET"])
def get_player_profile(region, player_name, tag):
    """
    GET /api/player/<region>/<player_name>
    Returns the player profile, recent matches, and aggregated stats.
    """
    # Basic validation could be added here if needed
    # if not region or not player_name:
    #     abort(400, "Region and player_name are required")

    # try:
    #     # Call your service layer to fetch and aggregate player data
    #     player_data = get_player_profile(region, player_name)
    #     if not player_data:
    #         return jsonify({"error": "Player not found"}), 404

    #     return jsonify(player_data), 200
    # except Exception as e:
    #     # Log error here as needed
    #     return jsonify({"error": str(e)}), 500
    print("getting called on")
    return jsonify({
        "region": region,
        "name": player_name,
        "tag": tag
    })

from flask import Blueprint

# Import each feature's blueprint
from .player import player_bp

# Create a parent blueprint to group all routes under /api
api_bp = Blueprint("api", __name__)

# Register feature-specific blueprints under their own prefixes
api_bp.register_blueprint(player_bp, url_prefix="/player")


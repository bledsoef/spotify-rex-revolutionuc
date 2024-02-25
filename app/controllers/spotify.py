from fastapi import APIRouter, Depends, HTTPException, status
import httpx
from dotenv import load_dotenv
from spotify_profile import get_user_profile, get_user_playlists, get_user_top_stats, get_user_picture
import os

load_dotenv()

router = APIRouter()

SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
SPOTIFY_REDIRECT_URI = os.getenv("SPOTIFY_REDIRECT_URI")


@router.get("/login")
async def login():
    scopes = "user-read-private user-read-email user-top-read"
    auth_url = f"https://accounts.spotify.com/authorize?client_id={SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri={SPOTIFY_REDIRECT_URI}&scope={scopes}"
    return {"url": auth_url}

@router.get("/callback")
async def callback(code: str):
    token_url = "https://accounts.spotify.com/api/token"
    payload = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": SPOTIFY_REDIRECT_URI,
        "client_id": SPOTIFY_CLIENT_ID,
        "client_secret": SPOTIFY_CLIENT_SECRET,
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(token_url, data=payload)

    tokens = response.json()
    access_token = tokens.get("access_token")

    user_profile = await get_user_profile(access_token)
    
    if user_profile:
        print("User Profile Information:")
        print(f"Display Name: {user_profile.get('display_name')}")
        print(f"Email: {user_profile.get('email')}")
        print(f"Country: {user_profile.get('country')}")
        print(f"Explicit content: {user_profile.get('explicit_contentma')}")
        print(f"Followers: {user_profile.get('followers')}")
        user_playlists = await get_user_playlists(user_profile['id'], access_token)
        user_picture = await get_user_picture(user_profile['id'], access_token)
        user_top_artists = await get_user_top_stats(access_token, 'artists')
        user_top_tracks = await get_user_top_stats(access_token, 'tracks')
        if user_picture:
            print(f"The user profile picture consists of {user_picture.get('images')}")

        print(user_top_artists)
        print(user_top_tracks)
            
        if user_playlists:
            print(f"The user public playlist consists of: {user_playlists.get('name')}")
            print(f"the playlist description is : {user_playlists.get('description')}")
    else:
        print("Failed to fetch user profile.")
    
    return tokens 

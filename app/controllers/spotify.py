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
        user_playlists = await get_user_playlists(user_profile['id'], access_token)
        user_picture = await get_user_picture(user_profile['id'], access_token)
        user_top_artists = await get_user_top_stats(access_token, 'artists', limit = 5)
        user_top_tracks = await get_user_top_stats(access_token, 'tracks', limit = 5)

        top_artists_info = []
        for artist in user_top_artists.get('items', []):
            name = artist.get('name')
            images = artist.get('images')
            top_artists_info.append({"name" : name,
                                 "images" : images})

        top_tracks_info = []
        for track in user_top_tracks.get('items', []):
            album = track.get('album')
            name = track.get('name')
            popularity = track.get('popularity')
            artist_names = [artist['name'] for artist in track.get('artists', [])]
            duration = track.get('duration')
            top_tracks_info.append({"name" : name,
                                 "album": album.get('name'),
                                 "images" : album.get('images'),
                                 "artists": artist_names,
                                 "popularity": popularity,
                                 "duration": duration})

            profile_info = {
            "display_name": user_profile.get('display_name'),
            "country": user_profile.get('country'),
            "explicit_content": user_profile.get('explicit_content'),
            "followers": user_profile.get('followers')['total'],
            "user_picture": user_picture,
            "top_artists": top_artists_info,
            "top_tracks": top_tracks_info,
            "playlists": [(item['name'], item['owner'], item['images']) for item in user_playlists.get('items')]
        }
        

        print(profile_info)
        return profile_info
        
    else:
        # print("Failed to fetch user profile.")
        raise HTTPException(status_code=404, detail="Failed to fetch user profile")
    
    return tokens 

# @router.get("/profile-info")
# async def profile_info():
#     #verify that the user is logged in

#     if user.isloggedin:
#         return 
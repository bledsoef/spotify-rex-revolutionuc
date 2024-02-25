import httpx

async def get_user_profile(access_token: str):
    url = 'https://api.spotify.com/v1/me'
    headers = {'Authorization': f'Bearer {access_token}'}
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
    if response.status_code == 200:
        print("Json response is:", response.json())
        return response.json()
    else:
        return None
    

async def get_user_playlists(user_id: str, access_token: str):
    url = f"https://api.spotify.com/v1/users/{user_id}/playlists"
    headers = {"Authorization": f"Bearer {access_token}"}
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None
    
async def get_user_picture(user_id: str, access_token: str):
    url = f"https://api.spotify.com/v1/users/{user_id}"
    headers = {"Authorization": f"Bearer {access_token}"}
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None
    
async def get_user_top_stats(access_token: str, type: str, limit: int = 5):
    url = f"https://api.spotify.com/v1/me/top/{type}?limit={limit}"
    headers = {'Authorization': f'Bearer {access_token}'}
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None
    


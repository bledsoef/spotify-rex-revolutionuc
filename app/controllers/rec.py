from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from database.connection import get_db
from app.logic.rec import create_new_rec, get_accepted_recs, get_sent_recs, get_posts, get_non_user_posts

router = APIRouter()

@router.post("/createRec")
async def createRec(request: Request, db :Session = Depends(get_db)):
    rec_data = await request.json()
    try:
        create_new_rec(db, rec_data)
        return {"message": "Rec created"}
    except Exception as e:
        print(e)
        return {"message": "Failed to create rec"}

@router.get("/getRecsForUser")
async def getRec(username: str, db: Session = Depends(get_db)):
    try:
        accepted_recs = get_accepted_recs(db, username)
        sent_recs = get_sent_recs(db, username)
        
        return {
                "sent": sent_recs,
                "accepted": accepted_recs
                }
    except Exception as e:
        print(e)
        return {"message": "Failed to get recs"}
    
@router.get("/getFeedForUser")
async def getFeed(username: str, db: Session = Depends(get_db)):
    try:
        non_user_posts = get_non_user_posts(db, username)
        
        return non_user_posts
    except Exception as e:
        print(e)
        return {"message": "Failed to get recs"}
from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from database.connection import get_db
from app.logic.rec import create_new_rec, get_received_recs, get_sent_recs, get_non_user_posts, create_new_review
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


@router.post("/createReview")
async def createReview(request: Request, db :Session = Depends(get_db)):
    rec_data = await request.json()
    try:
        create_new_review(db, rec_data)
        return {"message": "Rec created"}
    except Exception as e:
        print(e)
        return {"message": "Failed to create rec"}
    
@router.get("/getSentRecsForUser")
async def getSentRecsForUser(username: str, db: Session = Depends(get_db)):
    try:
        accepted_recs = get_sent_recs(db, username)
        
        return accepted_recs
    except Exception as e:
        print(e)
        return {"message": "Failed to get recs"}

@router.get("/getReceivedRecsForUser")
async def getReceivedRecsForUser(username: str, db: Session = Depends(get_db)):
    try:
        received_recs = get_received_recs(db, username)
        
        return received_recs
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
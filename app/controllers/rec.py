from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from database.connection import get_db
from app.logic.rec import *
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
async def createReview(request: Request, db: Session = Depends(get_db)):
    review_data = await request.json()
    try:
        create_new_review(db, review_data)
        return {"message": "Review created"}
    except Exception as e:
        print(e)
        return {"message": "Failed to create Review"}
    
@router.get("/getSentRecsForUser")
async def getSentRecsForUser(username: str, db: Session = Depends(get_db)):
    try:
        sent_recs = get_sent_recs(db, username)
        
        return sent_recs
    except Exception as e:
        print(e)
        return {"message": "Failed to get recs"}

@router.post("/acceptRecFromPost")
async def acceptRecFromPost(request: Request, db :Session = Depends(get_db)):
    data = await request.json()
    try:
        accept_rec_from_post(db, data["rec_id"], data["user_id"])
        return {"message": "Rec accepted."}
    except Exception as e:
        print(e)
        return {"message": "Failed to create rec"}

@router.post("/acceptRecFromUser")
async def acceptRecFromUser(request: Request, db :Session = Depends(get_db)):
    data = await request.json()
    try:
        accept_rec_from_user(db, data['rec_id'])
        return {"message": "Rec accepted."}
    except Exception as e:
        print(e)
        return {"message": "Failed to create rec"}

@router.post("/rejectRec")
async def rejectRec(request: Request, db :Session = Depends(get_db)):
    data = await request.json()
    try:
        reject_rec(db, data["rec_id"])
        return {"message": "Rec accepted."}
    except Exception as e:
        print(e)
        return {"message": "Failed to create rec"}

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
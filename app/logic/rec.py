from sqlalchemy.orm import Session
from app.models.models import Rec
def create_new_rec(db: Session, rec_data):
    try:
        new_user = Rec(**rec_data)
        db.add(new_user)
        db.commit()
        return True
    except Exception as e:
        return False

def get_accepted_recs(db: Session, user_id: str):
    return [entry.__dict__ for entry in db.query(Rec).filter(Rec.createdBy == user_id).all()]

def get_sent_recs(db: Session, user_id: str):
    return [entry.__dict__ for entry in db.query(Rec).filter(Rec.createdBy == user_id).all()]

def get_posts(db: Session, user_id: str):
    return db.query(Rec).filter(Rec.createdBy == user_id).all()
from sqlalchemy.orm import Session
from app.models.models import Rec, Review
def create_new_rec(db: Session, rec_data):
    for recipient in rec_data['recipients']:  
        try:
            new_user = Rec(name=rec_data['name'], createdBy=rec_data['sender'], sentTo=recipient, isPost=rec_data['isPost'], status="pending")
            db.add(new_user)
            db.commit()
        except Exception as e:
            return False
    return True

def create_new_review(db: Session, review_data):
    try:
        new_user = Review(name=review_data['name'], createdBy=review_data['sender'], rec=review_data['sender'], dateCreated=review_data['dateCreated'], comment=review_data['comment'], rating=review_data['rating'])
        db.add(new_user)
        db.commit()
    except Exception as e:
        return False


def get_received_recs(db: Session, user_id: str):
    received_pending = [entry.__dict__ for entry in db.query(Rec).filter(Rec.createdBy == user_id, Rec.status == 'pending').all()]
    received_accepted = [entry.__dict__ for entry in db.query(Rec).filter(Rec.createdBy == user_id, Rec.status == 'accepted').all()]
    received_completed = [entry.__dict__ for entry in db.query(Rec).filter(Rec.createdBy == user_id, Rec.status == 'completed').all()]
    return {'pending': received_pending, 'accepted': received_accepted, 'completed': received_completed}

def get_sent_recs(db: Session, user_id: str):
    sent_pending = [entry.__dict__ for entry in db.query(Rec).filter(Rec.sentTo == user_id, Rec.status == 'pending').all()]
    sent_accepted = [entry.__dict__ for entry in db.query(Rec).filter(Rec.sentTo == user_id, Rec.status == 'accepted').all()]
    sent_completed = [entry.__dict__ for entry in db.query(Rec).filter(Rec.sentTo == user_id, Rec.status == 'completed').all()]
    return {'pending': sent_pending, 'accepted': sent_accepted,'completed': sent_completed}

def get_posts(db: Session, user_id: str):
    return db.query(Rec).filter(Rec.createdBy == user_id).all()

def get_non_user_posts(db: Session, user_id: str):
    return db.query(Rec).filter(Rec.isPost == True, Rec.createdBy != user_id).all()
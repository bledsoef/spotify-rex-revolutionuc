from sqlalchemy.orm import Session, aliased
from app.models.models import Rec, Review
from datetime import datetime
def create_new_rec(db: Session, rec_data):
    for recipient in rec_data['recipients']:  
        try:
            new_user = Rec(name=rec_data['name'], createdBy=rec_data['sender'], sentTo=recipient, isPost=rec_data['isPost'], status="pending")
            db.add(new_user)
            db.commit()
        except Exception as e:
            print(e)
            return False
    return True

def create_new_review(db: Session, review_data):
    try:
        new_review = Review(createdBy=review_data['author'], rec_id=review_data['rec'], dateCreated=datetime.now(), comment=review_data['comment'], rating=review_data['rating'])
        db.add(new_review)
        db.commit()
    except Exception as e:
        print(e)
        return False


def get_received_recs(db: Session, user_id: str):
    received_pending = [entry.__dict__ for entry in db.query(Rec).filter(Rec.sentTo == user_id, Rec.status == 'pending').all()]
    received_accepted = [entry.__dict__ for entry in db.query(Rec).filter(Rec.sentTo == user_id, Rec.status == 'accepted').all()]
    received_completed = [
        dict(rec=rec.__dict__, review=review.__dict__) if review else dict(rec=rec.__dict__)
        for rec, review in(
            db.query(Rec, Review)
            .join(Review, Rec.id == Review.rec_id, isouter=True)
            .filter(Rec.sentTo == user_id, Rec.status == 'completed')
            .all()
    )]
    return {'pending': received_pending, 'accepted': received_accepted, 'completed': received_completed}

def get_sent_recs(db: Session, user_id: str):
    sent_pending = [entry.__dict__ for entry in db.query(Rec).filter(Rec.createdBy == user_id, Rec.status == 'pending', Rec.isPost == False).all()]
    sent_accepted = [entry.__dict__ for entry in db.query(Rec).filter(Rec.createdBy == user_id, Rec.status == 'accepted', Rec.isPost == False).all()]
    sent_completed = [
        dict(rec=rec.__dict__, review=review.__dict__) if review else dict(rec=rec.__dict__)
        for rec, review in(
            db.query(Rec, Review)
            .join(Review, Rec.id == Review.rec_id, isouter=True)
            .filter(Rec.sentTo == user_id, Rec.status == 'completed', Rec.isPost == False)
            .all()
    )]    
    return {'pending': sent_pending, 'accepted': sent_accepted,'completed': sent_completed}

def get_posts(db: Session, user_id: str):
    return db.query(Rec).filter(Rec.createdBy == user_id).all()

def get_non_user_posts(db: Session, user_id: str):
    return db.query(Rec).filter(Rec.isPost == True, Rec.createdBy != user_id).all()
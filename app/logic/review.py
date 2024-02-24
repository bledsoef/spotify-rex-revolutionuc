from sqlalchemy.orm import Session
from app.models.models import Rec, Review


def get_user_reviews(db:Session, username):
    user_reviews = [entry.__dict__ for entry in db.query(Review).filter(Review.createdBy==username)]
    return user_reviews

def get_post_review(db:Session, rec_id):
    review = db.query(Review).filter(Review.rec_id==rec_id).all()
    return review
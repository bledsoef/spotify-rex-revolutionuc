from database.connection import Base, engine
from sqlalchemy.orm import Session
from app.models.models import User, Rec, Review
from datetime import datetime
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)
print("inserting test data")
with Session(engine) as session:
    finn = User(username="finn", firstName="test", lastName="test", email="test")
    steve = User(username="steve", firstName="test", lastName="test", email="test")
    testPending = Rec(mediaName="test", artistName="test", description="description", createdBy="finn", sentTo="steve", isPost=False, status="pending")
    testAccepted = Rec(mediaName="test", artistName="test", description="description", createdBy="finn", sentTo="steve", isPost=False, status="accepted")
    testCompleted = Rec(mediaName="test", artistName="test", description="description", createdBy="finn", sentTo="steve", isPost=False, status="completed")
    testPost = Rec(mediaName="Red", artistName="Taylor Swift", description="description", createdBy="steve", sentTo=None, isPost=True, status="pending")
    testAcceptedPost = Rec(mediaName="Plastic Beach", artistName="Gorillaz", description="description", createdBy="steve", sentTo="finn", isPost=True, status="accepted")

    testRecReview = Review(id=1, createdBy="steve", rec_id=3, dateCreated=datetime(2024, 2, 14), comment="This is so cool", rating=5)
    testPostReview = Review(createdBy="steve", rec_id=4, dateCreated=datetime(3, 4, 5), comment="test review", rating=5)
    session.add_all([finn, steve, testPending, testAccepted, testCompleted, testPost, testAcceptedPost, testRecReview, testPostReview])
    session.commit()
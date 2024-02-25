from database.connection import Base, engine
from sqlalchemy.orm import Session
from app.models.models import User, Rec, Review
from datetime import datetime
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)
print("inserting test data")
with Session(engine) as session:
    finn = User(username="Finn", firstName="Finn", lastName="Bledsoe", email="test")
    steve = User(username="Steve", firstName="Stevenson", lastName="Michel", email="test")
    testActualPending1 = Rec(id=1, mediaName="Prelude To Ecstasy", artistName="The Last Dinner Party", description="Crazy how good this is for their first album!", createdBy="Steve", sentTo="Finn", isPost=False, status="pending", image="/album_covers/preludetoecstasy.png")
    testActualPending2 = Rec(id=10, mediaName="OK Computer", artistName="Radiohead", description="You CANT say you're into music if you haven't heard this.", createdBy="Steve", sentTo="Finn", isPost=False, status="pending", image="/album_covers/okcomputer.png")
    testActualPending3 = Rec(id=20, mediaName="Take Care", artistName="Drake", description="DRAAAAAAAAKE", createdBy="Steve", sentTo="Finn", isPost=False, status="pending", image="/album_covers/takecare.jpg")
    testPending = Rec(id=30, mediaName="Tha Carter III", artistName="Lil Wayne", description="I personally think this is Lil Wayne's best, if not one of the best rap albums period.", createdBy="Finn", sentTo="Steve", isPost=False, status="accepted", image="/album_covers/thacarterIII.jpg")
    testAccepted = Rec(id=40, mediaName="Ready To Die", artistName="The Notorius BIG", description="One of the best classic hip hop albums of all of time. Rest in Peace Big.", createdBy="Steve", sentTo="Finn", isPost=False, status="accepted", image="/album_covers/readytodie.jpg")
    testCompleted = Rec(id=50, mediaName="Abbey Road", artistName="The Beatles", description="If they just wouldn't let Ringo write songs this would be a perfect album.", createdBy="Finn", sentTo="Steve", isPost=False, status="completed", image="/album_covers/abbeyroad.jpg")
    testCompleted = Rec(id=60, mediaName="Illmatic", artistName="Nas", description="description", createdBy="Steve", sentTo="Finn", isPost=False, status="completed", image="/album_covers/illmatic.jpg")
    testPost = Rec(id=70, mediaName="Red", artistName="Taylor Swift", description="description", createdBy="Steve", sentTo=None, isPost=True, status="pending", image="/album_covers/red.jpg")
    testAcceptedPost = Rec(id=80, mediaName="Plastic Beach", artistName="Gorillaz", description="description", createdBy="Steve", sentTo=None, isPost=True, status="accepted", image="/album_covers/plasticbeach.jpg")
    testRecReview = Review(createdBy="Steve", rec_id=50, dateCreated=datetime(2024, 2, 14), comment="You're right, Ringo really ruins this, otherwise perfect!", rating=5)
    testPostReview = Review(createdBy="Steve", rec_id=60, dateCreated=datetime(3, 4, 5), comment="HOW WAS HE JUST 17!!", rating=5)
    testMultipleReviews1 = Review(createdBy="Steve", rec_id=70, dateCreated=datetime(3, 4, 5), comment="OMG LITERALLY MY FAVORITE TAYLOR ALBUM!!", rating=5)
    testMultipleReviews2 = Review(createdBy="Steve", rec_id=70, dateCreated=datetime(3, 4, 5), comment="I heard all the hype and wanted to check her out, not impressed.", rating=2)


    session.add_all([finn, steve, testPending, testAccepted, testCompleted, testPost, testAcceptedPost, testRecReview, testPostReview, testMultipleReviews1, testMultipleReviews2, testActualPending1, testActualPending2, testActualPending3])
    session.commit()
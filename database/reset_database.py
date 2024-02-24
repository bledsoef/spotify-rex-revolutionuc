from database.connection import Base, engine
from sqlalchemy.orm import Session
from app.models.models import User, Rec, Review
from datetime import datetime
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)
print("inserting test data")
with Session(engine) as session:
    testUser1 = User(username="testUser1", firstName="test", lastName="test", email="test")
    testUser2 = User(username="testUser2", firstName="test", lastName="test", email="test")
    testRec = Rec(name="test", createdBy="testUser1", sentTo="testUser2", isPost=False, status="pending")
    testRec2 = Rec(name="test2", createdBy="testUser1", sentTo="testUser2", isPost=False, status="accepted")
    testRec3 = Rec(name="test2", createdBy="testUser1", sentTo="testUser2", isPost=False, status="completed")
    testRec4 = Rec(name="test3", createdBy="testUser1", sentTo="testUser2", isPost=True, status="completed")
    testRec5 = Rec(name="test4", createdBy="testUser2", sentTo="testUser1", isPost=True, status="completed")

    testRev4 = Review(id=1, createdBy="testUser2", rec_id=5, dateCreated=datetime(2024, 2, 14), comment="This is so cool", rating=5)
    session.add_all([testUser1, testUser2, testRec, testRec2, testRev4, testRec3, testRec4, testRec5])
    session.commit()
from database.connection import Base, engine
from sqlalchemy.orm import Session
from app.models.models import User, Rec
from datetime import datetime
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)
print("inserting test data")
with Session(engine) as session:
    testUser1 = User(username="testUser1", firstName="test", lastName="test", email="test")
    testUser2 = User(username="testUser2", firstName="test", lastName="test", email="test")
    testRec = Rec(name="test", createdBy="testUser1", sentTo="testUser2", isPost=False)
    testRec2 = Rec(name="test2", createdBy="testUser1", sentTo="testUser2", isPost=False)
    session.add_all([testUser1, testUser2, testRec, testRec2])
    session.commit()
from database.connection import Base, engine
from sqlalchemy.orm import Session
from app.models.Rec import Rec
from datetime import datetime
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)
print("inserting test data")
with Session(engine) as session:
    testRec = Rec(name="test")
    session.add(testRec)
    session.commit()
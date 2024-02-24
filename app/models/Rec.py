from sqlalchemy import Boolean, Column, Integer, String, Date
from sqlalchemy.orm import relationship
from database.connection import Base

class Rec(Base):
    __tablename__ = "recs"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
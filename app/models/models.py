from sqlalchemy import Boolean, Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from database.connection import Base

class User(Base):
    __tablename__ = "users"
    
    username = Column(String(50), primary_key=True, index=True)
    firstName = Column(String(50))
    lastName = Column(String(50))
    email = Column(String(50))

    created_recs = relationship("Rec", back_populates="creator", foreign_keys="[Rec.createdBy]")

    # Define relationship with Rec for the received recommendations
    received_recs = relationship("Rec", back_populates="recipient", foreign_keys="[Rec.sentTo]")

class Rec(Base):
    __tablename__ = "recs"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    createdBy = Column(String(50), ForeignKey("users.username"))
    sentTo = Column(String(50), ForeignKey("users.username"), nullable=True)
    isPost = Column(Boolean, nullable=False)

    creator = relationship("User", back_populates="created_recs", foreign_keys=[createdBy])

    # Define relationship with User for the recipient
    recipient = relationship("User", back_populates="received_recs", foreign_keys=[sentTo])
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
    created_reviews = relationship("Review", back_populates="creator", foreign_keys="[Review.createdBy]")

    # Define relationship with Rec for the received recommendations
    received_recs = relationship("Rec", back_populates="recipient", foreign_keys="[Rec.sentTo]")

class Review(Base):
    __tablename__ = "reviews"
    
    id = Column(Integer, primary_key=True, index=True)
    createdBy = Column(String(50), ForeignKey("users.username"))
    rec_id = Column(Integer, ForeignKey("recs.id"), nullable=False)  # Change data type to INTEGER
    dateCreated = Column(Date, nullable=False)
    comment = Column(String(50), nullable=True)
    rating = Column(Integer, nullable=True)

    creator = relationship("User", back_populates="created_reviews", foreign_keys=[createdBy])
    rec_obj = relationship("Rec", back_populates="reviews", foreign_keys=[rec_id])

class Rec(Base):
    __tablename__ = "recs"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    createdBy = Column(String(50), ForeignKey("users.username"))
    sentTo = Column(String(50), ForeignKey("users.username"), nullable=True)
    isPost = Column(Boolean, nullable=False)
    # completed, pending, accepted, rejected
    status = Column(String(50), nullable=False)

    creator = relationship("User", back_populates="created_recs", foreign_keys=[createdBy])

    # Define relationship with User for the recipient
    recipient = relationship("User", back_populates="received_recs", foreign_keys=[sentTo])

    # Explicitly define the join condition for the reviews relationship
    reviews = relationship("Review", back_populates="rec_obj", foreign_keys=[Review.rec_id],
                           primaryjoin="Rec.id == Review.rec_id")
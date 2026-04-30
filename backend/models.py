from sqlalchemy import Column, Integer, String, Text, Float, DateTime
from database import Base
import datetime

class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    date = Column(DateTime, default=datetime.datetime.utcnow)
    location = Column(String)

class Offering(Base):
    __tablename__ = "offerings"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Float)
    phone_number = Column(String, index=True)
    donor_name = Column(String, index=True)
    purpose = Column(String)
    date = Column(DateTime, default=datetime.datetime.utcnow)

from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class EventBase(BaseModel):
    title: str
    description: str
    date: datetime
    location: str

class EventCreate(EventBase):
    pass

class Event(EventBase):
    id: int

    class Config:
        orm_mode = True

class OfferingBase(BaseModel):
    amount: float
    donor_name: str
    purpose: str

class OfferingCreate(OfferingBase):
    pass

class Offering(OfferingBase):
    id: int
    date: datetime

    class Config:
        orm_mode = True

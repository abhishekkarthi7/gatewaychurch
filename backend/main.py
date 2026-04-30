from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from typing import List

import models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Church API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to Church API"}

@app.post("/events/", response_model=schemas.Event)
def create_event(event: schemas.EventCreate, db: Session = Depends(get_db)):
    db_event = models.Event(**event.model_dump())
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event

@app.get("/events/", response_model=List[schemas.Event])
def read_events(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    events = db.query(models.Event).offset(skip).limit(limit).all()
    return events

@app.post("/offerings/", response_model=schemas.Offering)
def create_offering(offering: schemas.OfferingCreate, db: Session = Depends(get_db)):
    db_offering = models.Offering(**offering.model_dump())
    db.add(db_offering)
    db.commit()
    db.refresh(db_offering)
    return db_offering

@app.get("/offerings/", response_model=List[schemas.Offering])
def read_offerings(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    offerings = db.query(models.Offering).offset(skip).limit(limit).all()
    return offerings

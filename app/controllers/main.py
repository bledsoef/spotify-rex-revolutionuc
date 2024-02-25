from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware  # Import the CORS middleware
from mangum import Mangum
import uvicorn
import spotify
from database.connection import engine, SessionLocal, Base
# import app.controllers.admin as admin
import app.controllers.rec as rec
# import app.controllers.classes as classes
from app.controllers.spotify import router as spotify_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Allow both POST and OPTIONS methods
    allow_headers=["*"],
)

app.include_router(rec.router)
app.include_router(spotify_router, prefix="/auth")
# app.include_router(user.router)
# app.include_router(classes.router)

Base.metadata.create_all(bind=engine)
handler = Mangum(app)


if __name__ == "__main__":
   uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
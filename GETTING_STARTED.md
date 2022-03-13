# How to run the bookshop

## NPM workspaces
This app is divided into two packages (`ui` and `server`) inside a npm workspace.
If you want to start both, just run `npm run start` inside the root folder.
Each package has its own `start` script as well.

## Tests
Tests are written with cypress. To run them, just execute `npm run test` inside the root folder.

---

## Server
The server uses an SQLite database to store the books. On first run, it will execute some database migration script,
so first startup might take a few seconds longer.

## UI
The frontend uses parcel. On first run, it'll build up its cache directory, so it might also need a few seconds more.


---
That's it! Enjoy 🙂

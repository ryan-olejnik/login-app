# login-app
Simple react/express token-based login app

## Getting Started (running locally)
1. Start up mongo running locally on port 27017
2. Run `npm install` in both the /front-end folder and /api folder
3. Create environmental files in both /front-end folder and /api folder (see .env.example in each folder)
4. Seed the database by running the command `npm run seed` in the /api folder
5. Start up both the front-end server and api server by running the command `npm start` in both the /front-end folder and /api folder


## Notes
- Passwords should be stored as hashes (currently stored in plain text)

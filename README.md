# Homebase Team:

## Server:

- Sinatra
- Run with `ruby shifts_server.rb`

## React:

- Made with Create React App; all those notes are at the end of this README.

## What works?

- Everything except for the fact I could not, despite hours of troubleshooting, reading MDN, Stack Overflow, Sinatra docs, get around a `CORS` issue between `localhost:4567` and `localhost:3000`
- The Ruby server
  - has the required endpoint
  - will respond with JSON sorted by `last_name` or `first_name`
  - This is tested via `curl` and via any web browser pointing to `localhost:4567/shifts?sort_by=...`

### Accommodations:

- To mitigate this issue, I also have sorting enabled from within React app with dummy data.

## Is it a fail?

- It's up to your team to decide. Honestly, I haven't dealt with `CORS` issues at work, so although I'm familiar with the concept, it's not one I've had to troubleshoot
- I worked really hard on all of this, and definitely gave it my best. I'm proud of my work and enjoyed developing this.

Thank you, very much!

Cheers,
Jona

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

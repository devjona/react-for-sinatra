https://user-images.githubusercontent.com/7801456/191087380-448b63d0-9529-497e-b8c9-fa7791a75ba5.mov

# Summary:
This was a project I had to complete as part of the interview process for an employer; it was a take-home assignment.

## Objective:
1. Create a React app that fetches the schedules for some workers
2. The server must accept a query string parameter to sort the info by `first_name` or `last_name`
3. The client must render the schedules with the proper summaries for:
  - Hours worked per day
  - Hours worked per week for an employee
4. The client must also have a `select` that permits the user to change the sorting order.

## Technical Notes:

### Server:

- Sinatra
- Run with `ruby shifts_server.rb`

### React:

- Made with Create React App; all those notes are at the end of this README.

### What works?

- The Ruby server
  - has the required endpoint
  - will respond with JSON sorted by `last_name` or `first_name`
  - This is tested via `curl` and via any web browser pointing to `localhost:4567/shifts?sort_by=...`
- The React app
  - Displays the schedules with correct hour summaries
  - Lets user change sorting order

Cheers,
Jona

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

# Technical Notes:
If you have the dependencies already installed locally (node, ruby, the specified gems), you can run it like this:
## Server:

- Sinatra
- Run with `ruby shifts_server.rb`

## React:

- Made with Create React App; all those notes are at the end of this README.

## If you want to run it with Podman:
```bash
podman build -t <some:tag> -f Containerfile

# For the Ruby Server:
podman run -it -v .:/box:z -p 4567:4567 -p 3000:3000 --name <give_it_one> <some:tag> /bin/bash
# Once inside:
ruby sinatra_server/shifts_server.rb -o 0.0.0.0

# To run the React Server:
podman exec -it <give_it_one> /bin/bash
# Once inside:
yarn start 
# Visit your localhost:3000; (the React App will ping Sinatra on 4567)
```

### What works?

- The Ruby server
  - has the required endpoint
  - will respond with JSON sorted by `last_name` or `first_name`
  - This is tested via `curl` and via any web browser pointing to `localhost:4567/shifts?sort_by=...`
- The React app
  - Displays the schedules with correct hour summaries
  - Lets user change sorting order


---



### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

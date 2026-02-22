# React Side Effects

## Overview
This is a small React + Vite app that fetches a programming joke from JokeAPI.

Current behavior:
- Fetches a joke on initial page load.
- Shows a loading message while the request is in progress.
- Lets users fetch a new joke by clicking a button.
- Displays a friendly fallback message if the request fails.

## Prerequisites
- Node.js 18+
- npm 9+

## Setup
1. Install dependencies:
	```bash
	npm install
	```
2. Start the development server:
	```bash
	npm run dev
	```
3. Open the app at:
	```
	http://localhost:5173
	```

## Usage
1. Load the page and wait for the first joke to appear.
2. Click **Get a New Joke** to request another joke.
3. If the API is unavailable, the app shows:
	```
	Failed to fetch a joke. Please try again.
	```

## Testing
Run the test suite:

```bash
npm run test
```

## Build for Production
Create a production build:

```bash
npm run build
```

## API
Endpoint used by the app:

```
https://v2.jokeapi.dev/joke/Programming?type=single
```

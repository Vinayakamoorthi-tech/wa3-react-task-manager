# WA-3 React Task Manager

A responsive React frontend built for the Valentius Kryptix WA-3 milestone. It consumes the WA-2 Express REST API.

## Features
- Registration and JWT login
- Protected routes
- Dashboard with real task statistics
- Task list, details, create, edit and delete
- Client-side validation
- Visible loading and API error states
- Responsive mobile and desktop layout

## Routes
`/login`, `/register`, `/dashboard`, `/tasks`, `/tasks/new`, `/tasks/:id`, `/tasks/:id/edit`

## Setup
1. Start the WA-2 backend on port 5000.
2. Copy `.env.example` to `.env`.
3. Run `npm install`.
4. Run `npm run dev`.

The frontend defaults to `http://localhost:5000`. Change `VITE_API_BASE_URL` if your backend uses another URL.

## Production check
Run `npm run build` before submission.

## API endpoints used
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/tasks`
- GET `/api/tasks/:id`
- POST `/api/tasks`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id`

# PORTFOLIO-WEBSITE

A futuristic full-stack developer portfolio built with Next.js 16, MongoDB, Tailwind CSS, API Routes, and Server Actions.

The project serves as both a personal portfolio website and a lightweight content management system (CMS), allowing projects and blogs to be managed through a secure admin dashboard.

---

## Live Demo

Coming Soon

## GitHub Repository

https://github.com/Shaurya9935/portfolio-website

---

# Project Overview

Portfolio OS is a futuristic terminal-inspired portfolio that showcases projects, blogs, skills, and developer information through a modern black-and-white cyberpunk-inspired interface.

The project includes an admin dashboard that allows content management without modifying source code.

Administrators can:

* Create Projects
* Update Projects
* Delete Projects
* Manage Blog Posts
* View Contact Messages

All data is stored in MongoDB and rendered dynamically throughout the portfolio.

---

# Tech Stack

## Frontend

* Next.js 16 (App Router)
* React 19
* Tailwind CSS
* JavaScript

## Backend

* Next.js API Routes
* Next.js Server Actions
* MongoDB Atlas
* Mongoose

## Deployment

* Vercel

---

# Features Implemented

## Portfolio Features

* Futuristic UI inspired by game menus and terminal systems
* Responsive design
* Dynamic project showcase
* Dynamic blog system
* About section
* Contact section
* Skills section

## Admin Dashboard

* Create Project
* Read Projects
* Update Project
* Delete Project
* Blog Management
* Content Management Interface

## Backend Features

* MongoDB Integration
* RESTful API Routes
* Server Actions
* Structured JSON Responses
* Error Handling
* Dynamic Data Rendering

---

# CRUD Operations

## Projects

### Create

Add new projects from the admin dashboard.

### Read

Projects are fetched dynamically from MongoDB.

### Update

Existing projects can be edited from the admin dashboard.

### Delete

Projects can be permanently removed from the database.

---

# Rendering Strategies Used

## Server Side Rendering (SSR)

Used for:

* Admin Dashboard
* Dynamic content management pages

Reason:

These pages require fresh data on every request.

---

## Static Site Generation (SSG)

Used for:

* Individual blog pages

Reason:

Blog content changes infrequently and benefits from static generation.

---

## Incremental Static Regeneration (ISR)

Used for:

* Projects page
* Blog listing page

Reason:

Content can update periodically without requiring full rebuilds.

Example:

```js
export const revalidate = 60;
```

---

# API Routes

## Projects

### GET

```bash
/api/projects
```

Fetch all projects.

### POST

```bash
/api/projects
```

Create a new project.

### PATCH

```bash
/api/projects/[id]
```

Update an existing project.

### DELETE

```bash
/api/projects/[id]
```

Delete a project.

---

# Server Actions Used

Server Actions are used for:

* Project creation forms
* Blog creation forms
* Contact form submission

Example:

```js
"use server";

export async function createProject(formData) {
  // server-side logic
}
```

---

# Difference Between API Routes and Server Actions

## API Routes

Used when:

* Exposing endpoints
* Performing CRUD operations through HTTP requests
* Public data fetching

Example:

```bash
/api/projects
```

---

## Server Actions

Used when:

* Handling form submissions
* Executing server-side logic directly from React components
* Avoiding manual fetch requests

Example:

```jsx
<form action={createProject}>
```

---

# Database Setup

## MongoDB Atlas

Create a MongoDB Atlas cluster and obtain a connection string.

Example:

```env
MONGODB_URI=your_connection_string
```

---

# Environment Variables

Create a `.env.local` file.

```env
MONGODB_URI=
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

---

# Folder Structure

```bash
app/
├── admin/
├── projects/
├── blogs/
├── contact/
├── api/
│   ├── projects/
│   └── blogs/

components/
├── admin/
├── portfolio/
└── ui/

actions/
├── projectActions.js
├── blogActions.js

models/
├── Project.js
├── Blog.js

lib/
├── db.js
```

---

# Running Locally

Clone the repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Configure environment variables:

```bash
cp .env.example .env.local
```

Run development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# Concepts Covered From Class

* Next.js Project Setup
* App Router
* File Based Routing
* Layouts
* Multiple Routes
* API Routes
* MongoDB Integration
* CRUD Operations
* Error Handling
* Server Actions
* use server Directive
* SSR
* SSG
* ISR
* Component Architecture
* Dynamic Data Rendering

---

# Future Improvements

* Authentication System
* Markdown Blog Editor
* Rich Text Editor
* Analytics Dashboard
* Dark/Light Theme Toggle
* Search Functionality
* Image Upload Support

---

# Author

Shaurya Gupta


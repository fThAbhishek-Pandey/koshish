
# 👨‍💻 Koshish Documentation (Developer) 

## Workflow
![koshish workflow](https://github.com/fThAbhishek-Pandey/Koshish-Welfare-And-Education-Society/blob/develop/koshish-2025-04-24-172505.svg "This is Koshish workflow Structure")
---

## 🧱 Tech Stack

| Layer        | Tech Used                                      |
|--------------|------------------------------------------------|
| Frontend     | React (w/ Vite), Tailwind CSS, Context API     |
| Backend      | Node.js, Express.js                            |
| Database     | MongoDB (w/ Mongoose ODM)                      |
| Auth         | JWT + Role-based middleware                    |
| File Storage | Cloudinary (via `multer`)                      |
| Dev Tools    | GitHub, Postman, dotenv                        |
| Deployment   | Vercel (frontend), Render/Heroku (backend)     |

---

## 🗂️ Folder Structure

### 🔹 Frontend (`Adminpannel/`)

```
src/
├── assets/          // Images, logos
├── components/      // Reusable UI components (cards, inputs)
├── context/         // React Contexts (Auth, UI, Events)
├── pages/           // Routes: Dashboard, Events, Announcements
├── utils/           // Axios setup, JWT decoder, helpers
└── App.jsx          // Main routing
```

### 🔹 Backend (`backend/`)

```
config/              // DB connection, Cloudinary setup
controllers/         // Logic for handling routes
middleware/          // JWT verification, file uploads
models/              // Mongoose schemas
routes/              // Express routers
uploads/             // Local fallback for files
server.js            // Main entry point
```

---

## 🧪 Local Setup

### 1. **Clone Repo**

```bash
git clone https://github.com/fthabhishek-pandey/koshish-welfare-and-education-society.git
cd koshish-welfare-and-education-society
```

### 2. **Frontend Setup**

```bash
cd Adminpannel
npm install
npm run dev
```

Create `.env` in `Adminpannel/`:

```
VITE_API_URL=http://localhost:5000/api
```

### 3. **Backend Setup**

```bash
cd backend
npm install
npm run dev
```

Create `.env` in `backend/`:

```
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
CLOUD_NAME=<Cloudinary Cloud Name>
CLOUD_API_KEY=<Cloudinary API Key>
CLOUD_API_SECRET=<Cloudinary Secret>
```

---

## 🔑 Authentication & Roles

- JWT is used for all secure API calls.
- Middleware checks the role of the user (`admin`, `coordinator`, `cocirculer`, etc.).

Example:

```js
router.post('/events', verifyToken, checkRole(['admin', 'coordinator']), createEvent);
```

---

## 📡 API Usage

- All routes are prefixed with `/api`
- Some core endpoints:

| Endpoint                  | Method | Access Role   | Description                      |
|---------------------------|--------|---------------|----------------------------------|
| `/auth/login`             | POST   | Public        | Login to receive JWT             |
| `/users/`                 | GET    | Admin only    | Get all users                    |
| `/events/`                | GET    | All roles     | Get events based on role         |
| `/announcements/`         | POST   | Admin, Coord  | Add announcements                |
| `/gallery/upload`         | POST   | Cocirculer    | Upload images via Cloudinary     |

Use Postman and add this in Headers:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## ☁️ Cloudinary Upload (File Handling)

- Config is in `backend/config/cloudinary.js`
- Used for uploading event images or gallery images
- Middleware: `upload.single("file")`

---

## 🔄 Important Middleware

- `verifyToken` – checks JWT
- `checkRole([roles])` – ensures role access
- `upload.single("file")` – multer upload handler
- `errorHandler` – centralized error capture

---

## 🧩 Context Structure (Frontend)

- `authContext`: user login, logout, role storage
- `uiContext`: toggle UI states (sidebar, modals)
- `eventContext`: fetch and update event state

---

## 📌 Developer Notes

- Ensure all API calls have fallback/error states.
- Use environment variables – don’t hardcode secrets.
- Keep components modular and reusable.
- Follow naming conventions (camelCase for variables, PascalCase for components).
- Use `try/catch` in async API logic.
- Deploy frontend to **Vercel**, backend to **Render**.

---

## 🚀 Deployment

### Vercel (Frontend)

- Create new project
- Link GitHub repo
- Add `VITE_API_URL` in Vercel's environment variables

### Render (Backend)

- Choose Web Service
- Add environment variables for:
  - `MONGO_URI`
  - `JWT_SECRET`
  - `CLOUDINARY_*`
- Build Command: `npm install`
- Start Command: `npm run dev`

---

## 🧾 Contribution Tips

- Use feature branches:

```bash
git checkout -b feature/add-gallery
```

- Commit messages:

```
feat: add gallery route
```

- PR reviews are welcomed!
- Maintain code readability and linting standards

---


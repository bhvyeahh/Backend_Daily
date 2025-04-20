import express from "express"
import session from "express-session"
import cors from "cors";

import authRoute from "./routes/auth.routes.js"
import taskRoute from "./routes/task.routes.js"

const app = express();
const PORT = 8080;

app.use(cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true // Required for cookies/session
  }));

// Global middleware
app.use(express.json())

app.use(session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
      sameSite: 'lax', // Helps with cross-site cookies
      maxAge: 1000 * 60 * 60 * 24
    }
  }));

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Task Manager API")
})

app.use("/auth", authRoute)
app.use("/task", taskRoute)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

import express, { Application } from "express";
import resourceRoutes from "./routes/resourceRoutes";

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/resources", resourceRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

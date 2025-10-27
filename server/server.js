import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import postRoutes from "./routes/postRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

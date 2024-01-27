import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
config();
const app = express();
// Middlewares
app.use(cookieParser(process.env.COOKIE_SECRET)); // we have to use middlewares in the sequence if not this will show us error;
app.use(express.json());
app.use('/api/v1', appRouter);
// Remove it in production
app.use(morgan("dev"));
export default app;
//# sourceMappingURL=app.js.map
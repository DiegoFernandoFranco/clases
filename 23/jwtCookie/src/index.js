import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import sessionRouter from "./routes/sessionRouter.js";
import userRouter from "./routes/userRouter.js";

console.log(process.env.MONGO_DB_URI);


void (async () => {
    await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const app = express();
    const SERVER_PORT = 8083;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use('/api/sessions', sessionRouter);
    app.use('/api/users', userRouter);

    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}`);
    });
})();


import express from 'express';

import petRouter from "./routes/petRouter.js";

void (async () => {
    const app = express();
    const SERVER_PORT = 8083;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/pets', petRouter);

    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}`);
    });
})();


import express from 'express';
import { healthRouter, calculatorRouter } from "./routes";
import {errorHandler, logger} from "./middlewares";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

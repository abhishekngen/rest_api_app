import { Router } from 'express';
import {validateCalculatorRequestBody} from "../middlewares";
import {calculateResult} from "../controllers/calculator";

export const router = Router();

router.get('/', (req, res) => {
    res.send([2]);
});

router.get('/:id', (req, res) => {
    if(req.params.id === '2') {
        throw new Error('Invalid number');
    }
    res.send(`Hello ${req.params.id}`);
}); // Note that an empty id will not hit this endpoint since it will hit the first endpoint instead

router.post('/', validateCalculatorRequestBody, calculateResult);

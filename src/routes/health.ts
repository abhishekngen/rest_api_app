import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => {
    res.send({ message: 'OK' }); // JS body gets converted to JSON with .send()
});

import { Request, Response, NextFunction } from "express";

export function validateCalculatorRequestBody(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { operator, operand1, operand2 } = req.body;
    if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
        res.status(400).send('Operands must be numbers');
    }
    if(!['+', '-'].includes(operator)) {
        res.status(400).send('Operator is invalid');
    }

    next();
}

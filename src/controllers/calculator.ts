import {CalculatorRequestBody} from "../types";
import { Request, Response } from "express";

export function calculateResult(req: Request<{}, {}, CalculatorRequestBody>, res: Response) {
    const {operator, operand1, operand2} : CalculatorRequestBody = req.body;
    let result : number | string;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    console.log(result);
    res.json(result);
}
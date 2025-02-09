import { Request, Response } from 'express';

export const mockRequest = {
    body: {
        operator: '+',
        operand1: 1,
        operand2: 2,
    }
} as Request;
/*
The above object does not fit the Request interface
but using as Request disable typescript's type checking!
Alternatively can use Partial<Request>
 */


export const mockResponse = {
    json: jest.fn(),
} as unknown as Response;
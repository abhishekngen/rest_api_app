import {calculateResult} from "../controllers/calculator";
import {mockRequest, mockResponse} from "../__mocks__";

describe ("Calculator Tests", () => {
    it("should return the result of the calculation", () => {
        calculateResult(mockRequest, mockResponse);
        expect(mockResponse.json).toHaveBeenCalledWith(3);
    })
})

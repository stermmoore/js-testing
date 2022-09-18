import { MySomethingService } from "../mocking.js";

describe('Mocking An Object', () => {
    const mockRepository = jasmine.createSpyObj("mockRepository", ["getValues", "getValue"]);
    const myService = new MySomethingService(mockRepository);

    it('Should Call getValues', () => {
       const result = myService.getValues(); 

       expect(mockRepository.getValues).toHaveBeenCalled();
    });

    it('Should Call getValue(1)', () => {
        const result = myService.getValue(1); 

        expect(mockRepository.getValue).toHaveBeenCalledWith(1);
    });

    it('Should Call getValue and return II', () => {
        mockRepository.getValue.and.callFake(function() { return "II" });
        const result  = myService.getValue(2);


        expect(mockRepository.getValue).toHaveBeenCalledWith(2);
        expect(result).toBe("II");
    });

});
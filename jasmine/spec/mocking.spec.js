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


});
import { MySomethingService } from "../mocking.js";

describe('Mocking An Object', () => {
    const mockRepository = jasmine.createSpyObj("mockRepository", ["getValues"]);
    const myService = new MySomethingService(mockRepository);

    it('Should Call getValues', () => {
       const result = myService.getValues(); 

       expect(mockRepository.getValues).toHaveBeenCalled();
    });


});
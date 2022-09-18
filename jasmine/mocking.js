export class MySomethingService {
    constructor(myRepository) {
        this.repository = myRepository;
    }

    getValues = function() {
        return this.repository.getValues();
    }
}
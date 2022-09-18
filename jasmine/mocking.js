export class MySomethingService {
    constructor(myRepository) {
        this.repository = myRepository;
    }

    getValues = function() {
        return this.repository.getValues();
    }

    getValue = function(id) {
        return this.repository.getValue(id);
    }
}
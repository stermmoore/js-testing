module.exports = class RequestHandler {

    constructor(myRepository) {
        this.repository = myRepository;
    }

    handle = function(name) {
        return `hello ${name}`
    }

    getData = function() {
        console.log(this.repository)
        return this.repository.getData();
    }
}
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github,role) {
        this.github = github;
        this.role = role;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
    getEngineer() {
        return Engineer;
    }
};

module.exports = Engineer;
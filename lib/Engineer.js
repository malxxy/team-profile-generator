const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name,id,email,role,github) {
        super(name,id,email,role)
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
    }
    getGithub() {
        return this.github;
    };
};

module.exports = Engineer;
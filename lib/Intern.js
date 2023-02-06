const Employee = require('./Employee')

 class Intern extends Employee {
    constructor(school,role){
        this.school = school;
        this.role = role;
        }
        
        getSchool() {
            return this.school;
        }

        getRole() {
            return this.role;
        }
        
        getIntern() {
            return Intern;
        }
 };

 module.exports = Intern;
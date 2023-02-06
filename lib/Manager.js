const Employee = require('./Employee')

class Manager extends Employee {
    constructor(manager){
        this.officeNumber = officeNumber;
        this.role = role;
        }
    
        getRole() {
            return this.role
        }
        
        getManager() {
            return Manager;
        }
 };

 module.exports = Manager;
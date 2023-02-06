const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name,id,email,role,manager){
        super(name,id,email,role)
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
        }; 
        getRole() {
            return this.role
        };
 };

 module.exports = Manager;
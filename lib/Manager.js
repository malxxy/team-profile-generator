const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name,id,email,role,officeNumber){
        super(name,id,email,role)
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
        }; 
        getOfficeNumber() {
            return this.officeNumber;
        };
 };

 module.exports = Manager;
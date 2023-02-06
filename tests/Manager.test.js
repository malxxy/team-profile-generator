const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should return name', () => {
      const name = 'NameTest'

      const expectedName = new Employee(name);
      expect(expectedName.name).toEqual('NameTest');
    });
  
    it('should return id', () => {
        const id = '00';

        const expectedId = new Employee(id);
        expect(expectedId.id).toEqual('00');
    });
  
    it('should return email', () => {
        const email = 'example@example.com';

        const expectedEmail = new Employee(email);
        expect(expectedEmail.email).toEqual('example@example.com');
    });

    it('should return role', () => {
    const role = 'Manager';

    const expectedRole = new Employee(role);
    expect(expectedRole.role).toEqual('Manager');
    });

  it('should return office number', () => {
    const officeNumber = '808';

    const expectedOfficeNum = new Manager(officeNumber);
    expect(expectedOfficeNum.officeNumber).toEqual('808');
  });
});
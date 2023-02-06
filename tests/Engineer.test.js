const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
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
    const role = 'Engineer';

    const expectedRole = new Employee(role);
    expect(expectedRole.role).toEqual('Engineer');
    });

  it('should return github', () => {
    const github = 'github';

    const expectedGit = new Engineer(github);
    expect(expectedGit.github).toEqual('github');
  });
});
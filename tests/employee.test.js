const Employee = require('../lib/employee');


test('creates an employee object', () => {
    const employee = new Employee('Gary', 100, 'employee', 'Gary@gmail.com');

    expect(employee.empName).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.role).toEqual(expect.any(String))
    expect(employee.email).toStrictEqual(expect.any(String));
});

it("should return employees role as employee", () => {
    const employee = new Employee('Gary', 100, 'Gary@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});
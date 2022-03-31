const Manager = require('../lib/manager');


test('creates an employee object', () => {
    const manager = new Manager('Gary', 100, 'employee', 'Gary@gmail.com', 1234546789);

    expect(manager.empName).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.role).toEqual(expect.any(String))
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.phoneNumber).toEqual(expect.any(Number));
});

it("should return managers role as manager", () => {
    const manager = new Manager('Gary', 100, 'Gary@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});

it('should return html string populated by manager information', () =>{
    const manager = new Manager('Gary', 100, 'Gary@gmail.com') 

    expect(manager.getHTML()).toEqual(expect.any(String))
})
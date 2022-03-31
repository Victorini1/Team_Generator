const Engineer = require('../lib/engineer');


test('creates an employee object', () => {
    const engineer = new Engineer('Gary', 100, 'employee', 'Gary@gmail.com', 'Gary.github');

    expect(engineer.empName).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.role).toEqual(expect.any(String))
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
});

it("should return engineers role as engineer", () => {
    const engineer = new Engineer('Gary', 100, 'Gary@gmail.com');

    expect(engineer.getRole()).toEqual('Engineer');
});

it('should return html string populated by engineer information', () =>{
    const engineer = new Engineer('Gary', 100, 'Gary@gmail.com') 

    expect(engineer.getHTML()).toEqual(expect.any(String))
})
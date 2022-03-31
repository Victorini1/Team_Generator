const Intern = require('../lib/intern');


test('creates an employee object', () => {
    const intern = new Intern('Gary', 100, 'employee', 'Gary@gmail.com', 'School');

    expect(intern.empName).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.role).toEqual(expect.any(String))
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

it("should return interns role as intern", () => {
    const intern = new Intern('Gary', 100, 'Gary@gmail.com');

    expect(intern.getRole()).toEqual('Intern');
});

it('should return html string populated by intern information', () =>{
    const intern = new Intern('Gary', 100, 'Gary@gmail.com') 

    expect(intern.getHTML()).toEqual(expect.any(String))
})
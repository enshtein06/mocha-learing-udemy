const utils = require('./utils');
const expect = require('expect');


//it - first argv describes the test case, second checks this
// if res is not correct 'it' throws an error
/*it('should add two numbers', () => {
	var res = utils.add(44, 412);
	if(res !== 456) {
		throw new Error(`Expected 456 but got ${res}`);
	}
})*/

//expect is the better way to throw an error
it('should add two numbers', () => {
	var res = utils.add(33, 11);
	expect(res).toBe(44, `Expected 44 but got ${res}`).toBeA('number', `Expected number but got ${typeof res}`);
})

it('should square a number', () => {
	var x = utils.square(8);

	expect(x).toBe(64, `Expected 44 but got ${x}`).toBeA('number');
});


/*!!!  METHODS EXPLORED THERE  !!!*/
it('Should expect some values', () => {
	//expect.toBe isn't working to objects
	//use toEqual instead
	//toInclude checks if array or object include 5, toExclude does opposite

	//expect(12).toNotBe(11);
	//expect({name: 'Askhat'}).toEqual({name: 'Askhat'});
	//expect([2,3,4]).toExclude(5);
	expect({
		name: 'Askhat', 
		age: 20,
		location: 'Tomsk'
	}).toInclude({age: 20});

})

it('should verify first and last names are set', () => {
	var user = {
		firstName: '',
		lastName: '',
		age: 20
	}

	var fullName = 'Askhat Assilbekov';

	var checking = utils.setName(user, fullName);

	expect(checking).toInclude({
		firstName: 'Askhat',
		lastName: 'Assilbekov'
	});
})
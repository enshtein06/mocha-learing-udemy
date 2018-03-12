const request = require('supertest');
const expect = require('expect');
var {app} = require('./server');

it('should return hello world response', done => {
	request(app)
		.get('/')
		.expect(404)
		.expect((res) => {
			expect(res.body).toInclude({
				name: 'Todo App v1.0'
			})
		})
		.end(done);
});

it('should return users', done => {
	request(app)
		.get('/users')
		.expect(200)
		.expect(res => {
			expect(res.body).toInclude({
				name: 'Askhat',
				age: 20
			});
		})
		.end(done);
})
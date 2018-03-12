const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found',
		name: 'Todo App v1.0'
	})
});

app.get('/users', (req, res) => {
	var user1 = {
		name: 'Askhat',
		age: 20
	}
	var user2 = {
		name: 'Andrew',
		age: 27
	}
	var user3 = {
		name: 'Barbos',
		age: 22
	}
	var users = [user1, user2, user3];
	res.status(200).send(users);
})

app.listen(3000, () => {
	console.log('Server started up on port 3000')
});

module.exports.app = app;
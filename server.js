var express = require('express');
var bodyParser = require('body-parser');
var users = require('./users.json');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();
app.use(bodyParser.json());




app.get('/api/users', mainCtrl.getUsers);
app.get('/api/users', mainCtrl.getUsersByLanguage);
app.get('/api/filtered', mainCtrl.getUsersFiltered);
app.get('/api/users/admin/:type', mainCtrl.getUsersByType);
app.get('/api/users/:id', mainCtrl.getUserById);

app.post('/api/users', mainCtrl.createUser);
app.post('/api/users/admin/:admin', mainCtrl.createAdmin);

app.put('/api/users/language/:id', mainCtrl.updateLanguageById);
app.put('/api/users/forums/:id', mainCtrl.addToFavorites);
app.put('/api/users/:id', mainCtrl. updateUserById);

app.delete('/api/users/forums/:id', mainCtrl.deleteItemFromFavorites);
app.delete('/api/users', mainCtrl.deleteByQuery)





var port = 3000;
app.listen(port, function() {
	console.log('Code rises from the Ether of port ' + port);
})
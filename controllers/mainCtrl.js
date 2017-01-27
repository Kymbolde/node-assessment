var users = require('./../users.json');
var user = users;
module.exports = {

	getUsers: function(req, res, next) {
		res.status(200).json(users);
	},

	getUsersFiltered: function(req, res, next) {
		var arr=[];
		if (req.query.language) {
			var ans = [];
			for (var i = 0; i < user.length; i++) {
				if(req.body.language === user[i].language) {
					arr.push(user[i]);
				}
			}
		}
		else if (req.query.age) {
			var ans = [];
			for (var i = 0; i < user.length; i++) {
				if (req.query.age === user[i].age) {
					arr.push(user[i]);
				}
			}
		}
		else if (req.query.city) {
			var ans = [];
			for (var i = 0; i < user.length; i++) {
				if(req.query.city === user[i].city) {
					arr.push(user[i]);
				}
			}
		}
		else if (req.query.state) {
			var ans = [];
			for (var i = 0; i < user.length; i++) {
				if(req.query.state === user[i].state) {
					arr.push(user[i]);
				}
			}
		}
		else if (req.query.gender) {
			var ans = [];
			for (var i = 0; i < user.length; i++) {
				if(req.query.gender === user[i].gender) {
					arr.push(user[i]);
				}
			}
		}
		res.status(200).json(arr);
	},


	getUsersByLanguage: function(req, res, next){
        if(req.query.language){
            user = user.filter(function(user){
                return user["language"] === req.query.language;
            })
        }
        res.status(200).json(user);
    },



    getUsersByType: function(req, res, next){
        if(req.params.type){
            user = user.filter(function(user){
                return user["type"] === req.params.type;
            })
        }
        res.status(200).json(user);
    },



    getUserById: function(req, res, next){
        var ans = [];
            for(var i = 0; i < user.length; i++){
                if(req.params.id == user[i].id){
                     ans.push(user[i]);
                }
            }
            res.status(200).json(ans);
    },



    createUser: function(req, res, next){
        user.push(req.body);
        res.json(user);
    },



    createAdmin: function(req, res, next){
        var slot = req.body;
        var newUser = {
            id: slot.id,
            first_name: slot.first_name,
            last_name: slot.last_name,
            email: slot.email,
            gender: slot.gender,
            language: slot.language,
            age: slot.age,
            city: slot.city,
            state: slot.state,
            type: req.params.admin,
            favorites: slot.favorites
        }
       user.push(newUser);
       res.status(200).json(newUser);
    },


    updateLanguageById: function(req, res, next){
        var userAtI = [];
        for(var i = 0; i < user.length; i++){
            if(req.params.id == user[i].id){
                user[i].language = req.body.language;
                userAtI.push(user[i]);
            }
        }
        res.status(200).json(userAtI);
    },



    addToFavorites: function(req, res, next){
        var userAtI = [];
        for(var i = 0; i < user.length; i++){
            if(req.params.id == user[i].id){
                user[i].favorites.push(req.body.favorites);
                userAtI.push(user[i]);
            }
        }
        res.status(200).json(userAtI);
    },



    updateUserById: function(req, res, next){
        var userAtI = [];
        for(var i = 0; i < user.length; i++){
            if(req.params.id == user[i].id){
                user[i] = req.body;
                userAtI.push(user[i]);
            }
        }
        res.status(200).json(userAtI);
    },


    deleteItemFromFavorites: function(req, res, next){
        var userAtI = [];
        for(var i = 0; i < user.length; i++){
            
            if(req.params.id == user[i].id){
               for(var j = 0; j < user[i].favorites.length; j ++){
                   if(req.query.favorites === user[i].favorites[j]){
                       user[i].favorites.splice(j,1);
                       userAtI.push(user[i]);
                   }
               }
            }
        }
        res.status(200).json(userAtI);
    },



    deleteByQuery: function(req, res, next){
            for(var i = 0; i < user.length; i++){
                if(req.query.id == user[i].id){
                    user.splice(user[i],1);
                }
            }
            res.status(200).json(user);
    }

}
var fs = require('fs');
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.get("/heroed/:id", function(req, res) {
	console.log('got the heros weapon list');
	var heroName = req.params.id;
	fs.readFile('./data/list3.json', function(err, data) {
		var car = data.toString();
		var car2 = JSON.parse(car);
		for (var i = 0; i < car2.length; i++) {
			if (heroName == car2[i].name) {
				res.send(car2[i]);
				res.status(200);
			} else {
				res.status(400);
			}
		}
	})
});

app.get("/heros", function(req, res) {
	console.log('this is the complete list');
	fs.readFile('./data/list3.json', function(err, data) {
		var car = data.toString();
		var car2 = JSON.parse(car);
		res.status(200);
		res.send(car2);

	})
});

app.post("/hero", function(req, res) {
	console.log('posting new hero data');
	var hero = JSON.stringify(req.body);
	console.log(hero);
	if(fs.existsSync('./data/list2.json')) {
		res.send('already have that file');
		return;
	};
	fs.writeFile('./data/list2.json', hero);
	res.send('created new hero file');
});

app.put("/heros/:id", function(req, res) {
	var heroName = req.params.id;
	var hero = req.body;
	var car = fs.readFileSync('./data/list3.json').toString();
	var car2 = JSON.parse(car);
	for (var i = 0; i < car2.length; i++) {
		if (heroName == car2[i].name) {
			car2[i].name = heroName;
			car2[i].weapon = hero.weapon;
		}
	}
	console.log(car2);
	var car3 = JSON.stringify(car2);
	fs.writeFile('./data/list3.json', car3, function(err) {
		if(err) {
			res.send('nope, try again');
		} else {
			res.send("ok");
		}
	});
});

app.delete("/hero/:id", function(req, res) {
	var thehero = req.params.id;
	var hero1 = req.body[0];
	if(fs.existsSync('.' + hero1)) {
		fs.unlinkSync('.' + hero1);
		res.send(hero1 + ' deleted');
		return;
	}
});

app.listen(3000, function() {
	console.log('server started');
});

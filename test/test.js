var chai = require('chai');
var expect = chai.expect;
var superagent = require('superagent');
var chaiHttp = require('chai-http');
var server = require('../server.js');

chai.use(chaiHttp);

describe('will get all heros', function() {
	it('should return array of all heros', function(done) {
		superagent.get('http://localhost:3000/heros')
			.end(function(err, res) {
				expect(err).to.equal(null);
				expect(res.status).to.equal(200);
				done();
			});
	});
});

describe('will get specific hero', function() {
	var id;
	it('should return a hero', function(done) {
		superagent.get('http://localhost:3000/heroed' + id)
			.end(function(err, res) {
				expect(err).to.equal(null);
				expect(res.status).to.equal(200);
				done();
			});
	});
});

describe('testing the post', function() {
	it('should output a new file', function(done) {
		superagent.post('http://localhost:3000/hero')
			.end(function(err, res) {
				expect(err).to.equal(null);
				expect(res.status).to.equal(200);
				expect(res.body).to.not.equal(null);
				done();
			});
	});
});

describe('testing the put', function() {
	var id;
	it('should edit the file', function(done) {
		superagent.put('http://localhost:3000/heros/' + id)
			.end(function(err, res) {
				expect(err).to.equal(null);
				expect(res.status).to.equal(200);
				done();
			});
	});
});

describe('testing delete', function() {
	var id;
	it('should delete the file', function(done) {
		superagent.del('http://localhost:3000/hero' + id)
			.end(function(err, res) {
				expect(err).to.equal(null);
				done();
			});
	});
});

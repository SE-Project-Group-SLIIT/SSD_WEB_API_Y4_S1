/* eslint-disable no-inner-declarations */
var JwtStrategy = require("passport-jwt").Strategy,
	ExtractJwt = require("passport-jwt").ExtractJwt;

//loading the user model
var User = require("../models/User");
var config = require("./config");

module.exports = function (passport) {
	var opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
	opts.secretOrKey = config.passport.secret;
	passport.use(
		new JwtStrategy(opts, async (jwt_payload, done) => {
			try {
				const user = await User.findOne({ _id: jwt_payload._id });
				if (user) {
					done(null, user);
				} else {
					done(null, false);
				}
			} catch (err) {
				done(err, false);
			}
		}),
	);
};
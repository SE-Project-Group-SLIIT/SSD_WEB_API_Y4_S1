const Joi = require('joi'); 

const validationsMiddleware = (schema, type) => { 
	return (req, res, next) => { 
		const { error } = ((type === 'user') ? schema.validate(req.user) : schema.validate(req.body));
		if (error == null) {
			next(); 
		} else { 
			const { details } = error; 
			const message = details.map(i => i.message).join(',');            
			return res.status(400).json({ success: false, msg: 'Invalid request data. Try again', reason:message });
		} 
	}; 
}; 
module.exports = validationsMiddleware;
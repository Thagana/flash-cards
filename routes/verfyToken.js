const jwt = require('jsonwebtoken');


function auth(req, res, next){
	const token  = req.headers['auth-token'];
	// console.log(JSON.stringify(req.headers));
	if(!token) res.json({'message':'Access Denied'}).status(401);
	try{
		const verfied = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verfied;
	}catch(error){
		res.send('INVALID TOKEN: ' + error).status(400);
	}

	next();
}

module.exports = auth;
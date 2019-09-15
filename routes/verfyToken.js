const jwt = require('jsonwebtoken');


function auth(req, res, next){
	const token req.header('auth-token');

	if(!token) res.send('Access Denied').status(401);

	try{
		const verfied = jwt.verfy(token, process.env.TOKEN_SECRET);
		req.user = verfied;
	}catch(error){
		res.send('Invalid token').status(400);
	}
}
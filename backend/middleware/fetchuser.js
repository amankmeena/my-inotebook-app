let jwt = require('jsonwebtoken');
const JWT_SECRET = "mynamgoodAman"

const fetchuser = (req, res, next) => {
    // Get the user from jwt token and Add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: 'Use a valid token' })
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;   // not well understood

        next();
    } catch (error) {
        res.status(401).send({ error: 'Use a valid token' })
    }
}

module.exports = fetchuser;
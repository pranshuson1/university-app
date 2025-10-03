module.exports = function(allowedRoles=[]) {
return (req, res, next) => {
// Attach user via header for demo: x-user-id
const user = req.user || req.headers['x-user'] && JSON.parse(req.headers['x-user']) || null;
if(!user) return res.status(401).json({ error: 'Unauthorized: no user header' });
if(allowedRoles.length === 0) return next();
if(!allowedRoles.includes(user.role)) return res.status(403).json({ error: 'Forbidden' });
req.user = user;
next();
}
}
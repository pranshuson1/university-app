const { User, Role, Permission } = require('../models');

async function getUserPermissions(userId) {
  const user = await User.findByPk(userId, {
    include: [{ model: Role, include: [Permission] }]
  });
  const perms = new Set();
  user.Roles.forEach(role => {
    role.Permissions.forEach(p => perms.add(p.name));
  });
  return Array.from(perms);
}
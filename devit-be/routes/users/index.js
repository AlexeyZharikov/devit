const router = require('express').Router();
const login = require('../../actions').users.login;
const registration = require('../../actions').users.registration;
const getUsers = require('../../actions').users.getUsers

router.post('/login', login);
router.post('/register', registration);
router.get('/', getUsers)

module.exports = router;
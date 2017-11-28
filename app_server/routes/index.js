var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* POST login page. */
router.post('/login', indexController.login);

/* GET register page. */
router.post('/register', indexController.register);

/* GET session page. */
router.get('/session', indexController.session);



/* GET representantes page. */
router.get('/representantes', indexController.getRepresentantes);

/* GET representantes page. */
router.get('/news', indexController.getNews);

/* GET perfil del usuario page. */
router.get('/perfil', indexController.getPerfil);

/* POST perfil del usuario page. */
router.post('/postperfil', indexController.postPerfil);

module.exports = router;

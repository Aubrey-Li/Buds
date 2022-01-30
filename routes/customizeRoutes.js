const { Router } = require('express');
const customizeController = require('../controllers/customizeController');

const router = Router();

//routing
router.get('/lofi', customizeController.get_lofi);
router.post('/lofi', authController.post_lofi);

module.exports = router;
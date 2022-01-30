const { Router } = require('express');
const customizeController = require('../controllers/customizeController');

const router = Router();

//routing
router.get('/customize', customizeController.get_lofi);
router.post('/customize', customizeController.post_lofi);

module.exports = router;
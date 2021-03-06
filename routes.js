let router = require('express').Router();

let  mhsController = 
require('./controllers/mahasiswaController');

router.route('/mahasiswa')
    .get(mhsController.index)
    .post(mhsController.store)

router.route('/mahasiswa/:id').put(mhsController.update);
router.route('/mahasiswa_update_by_nim/:nim').put(mhsController.updateByNim);

module.exports = router;
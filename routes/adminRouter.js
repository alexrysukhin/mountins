const adminRouter = require('express').Router();
const bodyParser = require('body-parser');
const upload = require('../middleware/uploadPicture');
const adminController = require('../controllers/adminController');


const urlencodedParser = bodyParser.urlencoded({
	extended: false,
})

adminRouter.use('/adminskills', urlencodedParser, adminController.skillsSend);
adminRouter.use('/adminblog', urlencodedParser, adminController.blogSend);
adminRouter.use('/adminworks', urlencodedParser, upload.single('picture'), adminController.worksSend);
adminRouter.use('/', adminController.pageAdmin);




module.exports = adminRouter;
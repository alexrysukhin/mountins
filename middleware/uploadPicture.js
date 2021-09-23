const multer = require('multer');

const storage = multer.diskStorage({
	destination: (request, response, cb) => {
		cb(null, "uploads")
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	}
});

const fileFilter = (request, file, cb) => {
	try {
		if (file.mimetype === "image/png" ||
			file.mimetype === "image/jpeg" ||
			file.mimetype === "image/jpg") {
			cb(null, true);
		}
		else {
			cb(null, false);
			throw new Error('Файл неверного формата');
		}
	} catch (err) {
		console.log(err.message);
	}
}

module.exports = multer({
	storage, fileFilter
}); 
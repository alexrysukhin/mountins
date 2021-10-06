const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = require('./middleware/uploadPicture');

const nodemailer = require('nodemailer')


const aboutRouter = require('./routes/aboutRouter');
const blogRouter = require('./routes/blogRouter');
const worksRouter = require('./routes/worksRouter');
const welcomeRouter = require('./routes/welcomeRouter');
const adminRouter = require('./routes/adminRouter');

mongoose.connect('mongodb+srv://pms:Tzt9SYaIG6ZaZbfQ@cluster0.3jmcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useUnifiedTopology: true,
	useNewUrlParser: true,

})
	.then(() => console.log('MongoDB connected.'))
	.catch((err) => console.log(`${err.name}: ${err.message}`));




app.set('views', './views');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));



app.use('/admin', adminRouter);
app.use('/works', worksRouter);
app.use('/blog', blogRouter);
app.use('/about', aboutRouter);
app.use('/', welcomeRouter);



app.listen(3000, () => {
	console.log(`Server started at port 3000.`);
});
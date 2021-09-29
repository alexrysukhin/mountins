const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = require('./middleware/uploadPicture');

const nodemailer = require('nodemailer')
const Blog = require('./models/Blog')


const aboutRouter = require('./routes/aboutRouter');
const blogRouter = require('./routes/blogRouter');
const worksRouter = require('./routes/worksRouter');
const welcomeRouter = require('./routes/welcomeRouter');
const adminRouter = require('./routes/adminRouter');

mongoose.connect(process.env.DB_CONNECT, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	// useFindAndModify: false,
	// useCreateIndex: true
})
	.then(() => console.log('MongoDB connected.'))
	.catch((err) => console.log(`${err.name}: ${err.message}`));



// Blog.deleteOne({ title: 'Старт' }, function (err, result) {
// 	// mongoose.disconnect();

// 	if (err) return console.log(err);
// 	console.log(result);
// });




app.set('views', './views');

app.set('view engine', 'pug');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extebded: false }));
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



app.listen(process.env.PORT, () => {
	console.log(`Server started at port ${process.env.PORT}.`);
});